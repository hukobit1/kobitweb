from rest_framework import serializers
from .models import SliderImage, Member, Event, SiteData

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
        

class SiteDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteData
        fields = ('id', 'url', 'email', 'terms', 'linkedin_url', 'github_url', 'twitter_url', 'discord_url', 'instagram_url')
