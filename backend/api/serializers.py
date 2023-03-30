from rest_framework import serializers
from .models import SliderImage, Member, Event, Meta

class SliderImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SliderImage
        fields = ('id', 'image',)


class MembersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'name', 'position', 'photo', 'category', 'linkedin_url',)
        
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'image', 'about', 'date',)
        

class MetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meta
        fields = ('id', 'url', 'email',)
