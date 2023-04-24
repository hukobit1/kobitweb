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
        crop_coords = tuple(map(int, cropping.split(',')))
    except ValueError as e:
    	print(e)
    	return

    # open the image
    with open(image_full_path, 'rb') as f:
        original_image = Image.open(f)
        
        # calculate the aspect ratio of the crop
        crop_width = crop_coords[2] - crop_coords[0]
        crop_height = crop_coords[3] - crop_coords[1]
        crop_aspect_ratio = crop_width / crop_height
        new_width = crop_width
        new_height = int(new_width / crop_aspect_ratio)
        
        new_image = Image.new(mode=original_image.mode, size=(new_width, new_height))
        cropped_region = original_image.crop(crop_coords)
        paste_x = 0
        paste_y = int((new_height - cropped_region.size[1]) / 2)
        new_image.paste(cropped_region, (paste_x, paste_y))

        # save the cropped image to a temporary file with the new file name
        temp_file = os.path.join(settings.MEDIA_ROOT, type, cropped_file_name)
        new_image.save(temp_file)
        return os.path.join(settings.MEDIA_URL, type, cropped_file_name)
