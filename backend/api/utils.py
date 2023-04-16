from django.conf import settings
from PIL import Image
import os
import time

def crop_image(image_path, cropping, type):
    image_full_path = os.path.join(settings.MEDIA_ROOT, image_path)
    file_name, ext = os.path.splitext(os.path.basename(image_path))
    cropped_file_name = f"{file_name}_cropped{ext}"
    # parse the cropping string
    try:
        x, y, width, height= map(int, cropping.split(','))
    except ValueError as e:
    	print(e)
    	return

    # open the image
    with open(image_full_path, 'rb') as f:
        image = Image.open(f)

        # crop the image
        cropped_image = image.crop((x, y, x + width, y + height))

        # save the cropped image to a temporary file with the new file name
        temp_file = os.path.join(settings.MEDIA_ROOT, type, cropped_file_name)
        cropped_image.save(temp_file)
        return os.path.join(settings.MEDIA_URL, type, cropped_file_name)
