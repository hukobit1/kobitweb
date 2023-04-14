from django.http import HttpResponseBadRequest, HttpResponse
from django.conf import settings
from urllib.parse import urlencode
from PIL import Image
import os


def crop_image(image_path, cropping, type):
    # check if files already exist - ( to improve performance )
    file_name, ext = os.path.splitext(os.path.basename(image_path))
    cropped_file_name = f"{file_name}_cropped{ext}"
    cropped_file_full_path = os.path.join(settings.MEDIA_URL, type , cropped_file_name)
    if os.path.isfile(cropped_file_full_path):
    	return cropped_file_full_path
    	
    image_full_path = os.path.join(settings.MEDIA_ROOT, image_path)
    if not os.path.isfile(image_full_path):
        return HttpResponseBadRequest('image_path is not valid')

    # parse the cropping string
    try:
        x, y, width, height= map(int, cropping.split(','))
    except ValueError:
        return HttpResponseBadRequest('cropping is not valid')

    # open the image
    with open(image_full_path, 'rb') as f:
        image = Image.open(f)

        # crop the image
        cropped_image = image.crop((x, y, x + width, y + height))

        # save the cropped image to a temporary file with the new file name
        temp_file = os.path.join(settings.MEDIA_ROOT, type, cropped_file_name)
        cropped_image.save(temp_file)

        # return the URL of the cropped image
        return os.path.join(settings.MEDIA_URL, type , cropped_file_name)
