from rest_framework import serializers
from .models import ( SliderImage, Member, 
		      Event, SiteData, 
		      PositionCategory, Gallery )

class SliderImagesSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = SliderImage
        fields = ('id', 'image_url',)

    def get_image_url(self, obj):
        return obj.cropped_image

class PositionCategoriesSerializer(serializers.ModelSerializer):
	class Meta:
	        model = PositionCategory
	        fields = ('id', 'name',)


class MembersSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()

    class Meta:
        model = Member
        fields = ('id', 'name', 'position', 'category', 'linkedin_url', 'image_url',)
        
    def get_category(self, obj):
    	return obj.category.name
    
    def get_image_url(self, obj):
        return obj.cropped_image
        
class EventSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Event
        fields = ('id', 'name', 'about', 'date', 'image_url',)
        
    def get_image_url(self, obj):
        return obj.cropped_image
        
class SiteDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteData
        fields = ('id', 'document_url', 'gallery_header', 'email', 'contract', 'linkedin_url', 'github_url', 'twitter_url', 'discord_url', 'instagram_url',)
        
        
class GallerySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = ('id', 'title', 'image_url', 'cover_url',)
        
    def get_image_url(self, obj):
        return obj.cropped_image
        
    def get_cover_url(self, obj):
    	return obj.cropped_cover
