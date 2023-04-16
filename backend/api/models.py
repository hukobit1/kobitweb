from django.db import models
from image_cropping import ImageRatioField, ImageCroppingMixin
from django.conf import settings
import os
from .utils import crop_image


class SliderImage(ImageCroppingMixin, models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    image = models.ImageField(upload_to='sliders/')
    cropping = ImageRatioField('image', '900x400', allow_fullsize=True)
    cropped_image = models.CharField(max_length=255, blank=True, null=True)
    
    def save(self, *args, **kwargs):
    	if self.id:
    		# get the old version of image
    		old_image = SliderImage.objects.get(id=self.id).image
    		file_name, _ = os.path.splitext(os.path.basename(old_image.name))
    		if self.image and old_image and self.image != old_image:
    			# delete old image
    			for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'sliders')):
    				if filename.startswith(file_name):
    					os.remove(os.path.join(settings.MEDIA_ROOT, 'sliders', filename))
    	super(SliderImage, self).save(*args, **kwargs)
    	self.cropped_image = crop_image(self.image.name, self.cropping, 'sliders')
    	super(SliderImage, self).save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
    	if self.image:
    		file_name, _ = os.path.splitext(os.path.basename(self.image.name))
    		for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'sliders')):
    			if filename.startswith(file_name):
    				os.remove(os.path.join(settings.MEDIA_ROOT, 'sliders', filename))				
    	super(SliderImage, self).delete(*args, **kwargs)

    def __str__(self):
        return self.title


class PositionCategory(models.Model):
    name = models.CharField(max_length=250)

    def __str__(self):
        return self.name

class Member(ImageCroppingMixin, models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    category = models.ForeignKey(PositionCategory, on_delete=models.CASCADE)
    linkedin_url = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='members/')
    cropping = ImageRatioField('image', '200x200', allow_fullsize=True)
    cropped_image = models.CharField(max_length=255, blank=True, null=True)
    
    def save(self, *args, **kwargs):
    	if self.id:
    		# get the old version of image
    		old_image = Member.objects.get(id=self.id).image
    		file_name, _ = os.path.splitext(os.path.basename(old_image.name))
    		if self.image and old_image and self.image != old_image:
    			# delete old image
    			for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'members')):
    				if filename.startswith(file_name):
    					os.remove(os.path.join(settings.MEDIA_ROOT, 'members', filename))
    	super(Member, self).save(*args, **kwargs)
    	self.cropped_image = crop_image(self.image.name, self.cropping, 'members')
    	super(Member, self).save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
    	if self.image:
    		file_name, _ = os.path.splitext(os.path.basename(self.image.name))
    		for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'members')):
    			if filename.startswith(file_name):
    				os.remove(os.path.join(settings.MEDIA_ROOT, 'members', filename))				
    	super(Member, self).delete(*args, **kwargs)

    def __str__(self):
        return self.name

class Event(ImageCroppingMixin, models.Model):
    id = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255)
    date = models.DateTimeField()
    about = models.TextField()
    image = models.ImageField(upload_to='events/')
    cropping = ImageRatioField('image', '250x250', allow_fullsize=True)
    cropped_image = models.CharField(max_length=255, blank=True, null=True)
    
    def save(self, *args, **kwargs):
    	if self.id:
    		# get the old version of image
    		old_image = Event.objects.get(id=self.id).image
    		file_name, _ = os.path.splitext(os.path.basename(old_image.name))
    		if self.image and old_image and self.image != old_image:
    			# delete old image
    			for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'events')):
    				if filename.startswith(file_name):
    					os.remove(os.path.join(settings.MEDIA_ROOT, 'events', filename))
    	super(Event, self).save(*args, **kwargs)
    	self.cropped_image = crop_image(self.image.name, self.cropping, 'events')
    	super(Event, self).save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
    	if self.image:
    		file_name, _ = os.path.splitext(os.path.basename(self.image.name))
    		for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'events')):
    			if filename.startswith(file_name):
    				os.remove(os.path.join(settings.MEDIA_ROOT, 'events', filename))				
    	super(Event, self).delete(*args, **kwargs)
    	
    def __str__(self):
        return self.name


class SiteData(models.Model):
    document_url = models.CharField(max_length=500)
    email = models.CharField(max_length=500)
    contract = models.TextField()
    linkedin_url = models.CharField(max_length=255)
    twitter_url = models.CharField(max_length=255)
    instagram_url = models.CharField(max_length=255)
    github_url = models.CharField(max_length=255)
    discord_url = models.CharField(max_length=255)

    def __str__(self):
        return "Site Data"
