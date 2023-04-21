from rest_framework.views import exception_handler
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ( SliderImage, Member, 
		      Event, SiteData, 
		      PositionCategory, Gallery
		    )
from .serializers import ( SliderImagesSerializer, MembersSerializer, 
			   EventSerializer, SiteDataSerializer,
			   PositionCategoriesSerializer, GallerySerializer
			 )

# Create your views here.

class SliderImagesView(APIView):
    def get(self, request):
    	slider_images = SliderImage.objects.all()
    	if not slider_images:
    		return Response(status=status.HTTP_404_NOT_FOUND)
    	serializer = SliderImagesSerializer(slider_images, many=True)
    	return Response(serializer.data)
        
class PositionCategoriesView(APIView):
    def get(self, request):
        categories = PositionCategory.objects.all()
        if not categories:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = PositionCategoriesSerializer(categories, many=True)
        return Response(serializer.data)
        

class MembersView(APIView):
    def get(self, request):
        category = request.query_params.get('category', '').lower()
        members = Member.objects.all()
        if category:
            members = members.filter(category__iexact=category)
        if not members:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = MembersSerializer(members, many=True)
        return Response(serializer.data)
        

class EventsView(APIView):
    def get(self, request):
        events = Event.objects.all()
        if not events:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
        
class GalleryView(APIView):
    def get(self, request):
    	gallery = Gallery.objects.all()
    	if not gallery:
    		return Response(status=status.HTTP_404_NOT_FOUND)
    	serializer = GallerySerializer(gallery, many=True)
    	return Response(serializer.data)
        

class SiteDataView(APIView):
    def get(self, request):
        document = SiteData.objects.first()
        if not document:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SiteDataSerializer(document)
        return Response(serializer.data)


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is None:
        return Response({'error': exc}, status=status.HTTP_404_NOT_FOUND)
    return response
