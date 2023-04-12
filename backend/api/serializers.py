from rest_framework import serializers
from .models import SliderImage, Member, Event, SiteData

class SliderImagesSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = SliderImage
        fields = ('id', 'image_url',)

    def get_image_url(self, obj):
        return obj.image_url


class MembersSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = ('id', 'name', 'position', 'image', 'category', 'linkedin_url', 'image_url',)
    
    def get_image_url(self, obj):
        return obj.image_url
        
class EventSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ('id', 'name', 'image', 'about', 'date', 'image_url',)
        
    def get_image_url(self, obj):
        return obj.image_url
        
class SiteDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteData
        fields = ('id', 'url', 'email', 'terms', 'linkedin_url', 'github_url', 'twitter_url', 'discord_url', 'instagram_url')
