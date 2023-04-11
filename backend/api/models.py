from django.db import models
from image_cropping.fields import ImageCropField
from image_cropping.utils import get_backend
from image_cropping import ImageRatioField, ImageCroppingMixin


# Create your models here.

class SliderImage(ImageCroppingMixin, models.Model):
	image = models.ImageField(upload_to='static/uploads/')
	cropping = ImageRatioField('image', '900x400', free_crop=True)
	title = models.CharField(max_length=255)
	description = models.CharField(max_length=500)
	
	def __str__(self):
		return self.title


class Member(models.Model):
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
	photo= models.ImageField(upload_to='static/uploads/')
	cropping = ImageRatioField('photo', '200x200', free_crop=True)
	linkedin_url = models.CharField(max_length=255, blank=True, null=True)
	
	def __str__(self):
		return self.name
	

class Event(models.Model):
	id = models.CharField(max_length=255, primary_key=True)
	name = models.CharField(max_length=255)
	date = models.DateTimeField()
	about = models.TextField()
	image = models.ImageField(upload_to='static/uploads/')
	cropping = ImageRatioField('image', '250x250', free_crop=True)
	
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
