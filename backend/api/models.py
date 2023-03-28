from django.db import models

# Create your models here.

class SliderImage(models.Model):
	image= models.ImageField(upload_to='static/uploads/')
	title = models.CharField(max_length=255)
	description = models.CharField(max_length=255)


class Member(models.Model):
	name = models.CharField(max_length=255)
	position = models.CharField(max_length=255)
	category = models.CharField(max_length=50, null=True, blank=True)
	photo= models.ImageField(upload_to='static/uploads/')
	linkedin_url = models.CharField(max_length=255, blank=True, null=True)
	

class Event(models.Model):
	id = models.CharField(max_length=255, primary_key=True)
	name = models.CharField(max_length=255)
	date = models.DateTimeField()
	about = models.TextField()
	image = models.ImageField(upload_to='static/uploads/')
