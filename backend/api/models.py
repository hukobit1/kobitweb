from django.db import models
from image_cropping.fields import ImageCropField
from image_cropping import ImageRatioField, ImageCroppingMixin
from django.urls import reverse
from django.http import HttpResponseBadRequest, HttpResponse
from django.conf import settings
from urllib.parse import urlencode
from PIL import Image
import os
import requests
from .utils import crop_image



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
                return crop_image(self.image.name, f'{x1},{y1},{x2-x1},{y2-y1}', 'sliders')
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

	@property
	def image_url(self):
	    try:
	        if self.cropping:
	            x1, y1, x2, y2 = map(int, self.cropping.split(','))
	            return crop_image(self.image.name, f'{x1},{y1},{x2-x1},{y2-y1}', 'members')
	        else:
	            return self.image.url
	    except Exception as e:
	        print(e)

	name = models.CharField(max_length=255)
	position = models.CharField(max_length=255)
	category = models.CharField(max_length=20, choices = CATEGORY_CHOICES)
	image= models.ImageField(upload_to='members/')
	cropping = ImageRatioField('image', '200x200', allow_fullsize=True)
	linkedin_url = models.CharField(max_length=255, blank=True, null=True)

	def __str__(self):
		return self.name

class Event(ImageCroppingMixin, models.Model):
    @property
    def image_url(self):
	    try:
	        if self.cropping:
	            x1, y1, x2, y2 = map(int, self.cropping.split(','))
	            return crop_image(self.image.name, f'{x1},{y1},{x2-x1},{y2-y1}', 'events')
	        else:
	            return self.image.url
	    except Exception as e:
	        print(e)

    id = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    date = models.DateTimeField()
    about = models.TextField()
    image = models.ImageField(upload_to='events/')
    cropping = ImageRatioField('image', '250x250', allow_fullsize=True)

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

