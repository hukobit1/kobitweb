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
        
class Gallery(ImageCroppingMixin, models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='gallery/')
    image_cropping = ImageRatioField('image', '1000x1000', allow_fullsize=True, free_crop=True)
    cover_cropping = ImageRatioField('image', '300x327', allow_fullsize=True)
    cropped_image = models.CharField(max_length=255, blank=True, null=True)
    cropped_cover = models.CharField(max_length=255, blank=True, null=True)
    
    def save(self, *args, **kwargs):
    	if self.id:
    		# get the old version of image
    		old_image = Gallery.objects.get(id=self.id).image
    		file_name, _ = os.path.splitext(os.path.basename(old_image.name))
    		if self.image and old_image and self.image != old_image:
    			# delete old image
    			for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'gallery')):
    				if filename.startswith(file_name):
    					os.remove(os.path.join(settings.MEDIA_ROOT, 'gallery', filename))
    			for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'cover')):
    				if filename.startswith(file_name):
    					os.remove(os.path.join(settings.MEDIA_ROOT, 'cover', filename))
    	super(Gallery, self).save(*args, **kwargs)
    	self.cropped_image = crop_image(self.image.name, self.image_cropping, 'gallery')
    	self.cropped_cover = crop_image(self.image.name, self.cover_cropping, 'cover')
    	super(Gallery, self).save(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
    	if self.image:
    		file_name, _ = os.path.splitext(os.path.basename(self.image.name))
    		for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'gallery')):
    			if filename.startswith(file_name):
    				os.remove(os.path.join(settings.MEDIA_ROOT, 'gallery', filename))
    		for filename in os.listdir(os.path.join(settings.MEDIA_ROOT, 'cover')):
    			if filename.startswith(file_name):
    				os.remove(os.path.join(settings.MEDIA_ROOT, 'cover', filename))		
    	super(Gallery, self).delete(*args, **kwargs)
    	
    def __str__(self):
        return self.title


class SiteData(models.Model):
    document_url = models.CharField(max_length=500)
    email = models.CharField(max_length=500)
    gallery_header = models.CharField(max_length=500)
    linkedin_url = models.CharField(max_length=255)
    twitter_url = models.CharField(max_length=255)
    instagram_url = models.CharField(max_length=255)
    github_url = models.CharField(max_length=255)
    discord_url = models.CharField(max_length=255)
    contract = models.TextField()

    def __str__(self):
        return "Site Data"
