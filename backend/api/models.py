from django.db import models
from image_cropping.fields import ImageCropField
from image_cropping import ImageRatioField, ImageCroppingMixin
from django.urls import reverse
from urllib.parse import urlencode
import os
import requests
import dotenv


dotenv.load_dotenv()
# Create your models here.

class SliderImage(ImageCroppingMixin, models.Model):
    image = models.ImageField(upload_to='sliders/')
    cropping = ImageRatioField('image', '900x400', allow_fullsize=True)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)

    @property
    def image_url(self):
        try:
            if self.cropping:
                x1, y1, x2, y2 = map(int, self.cropping.split(','))
                url = reverse('crop_image')
                params = {
                    'image_path': self.image.name,
                    'cropping': f'{x1},{y1},{x2-x1},{y2-y1}',
                    'type': 'sliders'
                }
                site_name = os.getenv('SITE_NAME')
                crop_url = f"{site_name}{url}?{urlencode(params)}"
                response = requests.get(crop_url)
                if response.status_code == 200:
                    return response.content.decode()
            else:
                return self.image.url
        except Exception as e:
            print(e)

    def __str__(self):
        return self.title


class Member(ImageCroppingMixin, models.Model):
	YONETIMKURULU = 'yonetimKurulu'
	DENETLEMEKURULU = 'denetlemeKurulu'
	TOPLULUBASKANI = 'toplulukBaskani'
	
	CATEGORY_CHOICES = [
		(YONETIMKURULU, 'yonetimKurulu'),
		(DENETLEMEKURULU, 'denetlemeKurulu'),
		(TOPLULUBASKANI, 'toplulukBaskani')
	]
	
	name = models.CharField(max_length=255)
	position = models.CharField(max_length=255)
	category = models.CharField(max_length=20, choices = CATEGORY_CHOICES)
	image= models.ImageField(upload_to='members/')
	cropping = ImageRatioField('image', '200x200', allow_fullsize=True)
	linkedin_url = models.CharField(max_length=255, blank=True, null=True)
	
	
	@property
	def image_url(self):
		try:
			if self.cropping:
				x1, y1, x2, y2 = map(int, self.cropping.split(','))
				url = reverse('crop_image')
				params = {
					'image_path': self.image.name,
					'cropping': f'{x1},{y1},{x2-x1},{y2-y1}',
					'type': 'sliders'
				}
				site_name = os.getenv('SITE_NAME')
				crop_url = f"{site_name}{url}?{urlencode(params)}"
				response = requests.get(crop_url)
				if response.status_code == 200:
					return response.content.decode()
			else:
				return self.image.url
		except Exception as e:
			print(e)
	
	def __str__(self):
		return self.name

	

class Event(ImageCroppingMixin, models.Model):
	id = models.CharField(max_length=255, primary_key=True)
	name = models.CharField(max_length=255)
	date = models.DateTimeField()
	about = models.TextField()
	image = models.ImageField(upload_to='events/')
	cropping = ImageRatioField('image', '250x250', allow_fullsize=True)
	
	
	@property
	def image_url(self):
		try:
			if self.cropping:
				x1, y1, x2, y2 = map(int, self.cropping.split(','))
				url = reverse('crop_image')
				params = {
					'image_path': self.image.name,
					'cropping': f'{x1},{y1},{x2-x1},{y2-y1}',
					'type': 'sliders'
				}
				site_name = os.getenv('SITE_NAME')
				crop_url = f"{site_name}{url}?{urlencode(params)}"
				response = requests.get(crop_url)
				if response.status_code == 200:
					return response.content.decode()
			else:
				return self.image.url
		except Exception as e:
			print(e)
	
	def __str__(self):
		return self.name

class SiteData(models.Model):
	url = models.CharField(max_length=500)
	email = models.CharField(max_length=500)
	terms = models.TextField()
	linkedin_url = models.CharField(max_length=255)
	twitter_url = models.CharField(max_length=255)
	instagram_url = models.CharField(max_length=255)
	github_url = models.CharField(max_length=255)
	discord_url = models.CharField(max_length=255)
	
	
	def __str__(self):
		return "Site Data"
