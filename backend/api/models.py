from django.db import models

# Create your models here.

class SliderImage(models.Model):
	image= models.ImageField(upload_to='static/uploads/')
	title = models.CharField(max_length=255)
	description = models.CharField(max_length=255)
	
	def __str__(self):
		return self.title


class Member(models.Model):
	name = models.CharField(max_length=255)
	position = models.CharField(max_length=255)
	category = models.CharField(max_length=50, null=True, blank=True)
	photo= models.ImageField(upload_to='static/uploads/')
	linkedin_url = models.CharField(max_length=255, blank=True, null=True)
	
	def __str__(self):
		return self.name
	

class Event(models.Model):
	id = models.CharField(max_length=255, primary_key=True)
	name = models.CharField(max_length=255)
	date = models.DateTimeField()
	about = models.TextField()
	image = models.ImageField(upload_to='static/uploads/')
	
	def __str__(self):
		return self.name

class Meta(models.Model):
	url = models.CharField(max_length=500)
	email = models.CharField(max_length=500)
	
	def __str__(self):
		return "Meta"
