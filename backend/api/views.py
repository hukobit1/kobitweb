from django.shortcuts import render
from rest_framework.views import exception_handler
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SliderImage, Member, Event, SiteData
from .serializers import SliderImagesSerializer, MembersSerializer, EventSerializer, SiteDataSerializer
from django.conf import settings
from django.http import HttpResponseBadRequest, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import os

# Create your views here.

class SliderImagesView(APIView):
    def get(self, request):
        slider_images = SliderImage.objects.all()
        if not slider_images:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = SliderImagesSerializer(slider_images, many=True)
        for image in slider_images:
        	print(image.image_url)
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
        return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
    return response


def crop_image(request):
    image_path = request.GET.get('image_path', '')
    cropping = request.GET.get('cropping', '')
    type = request.GET.get('type', '')
    
    if not image_path or not cropping:
        return HttpResponseBadRequest('image_path and cropping fields are required')
    
    image_full_path = os.path.join(settings.MEDIA_ROOT, image_path)
    if not os.path.isfile(image_full_path):
        return HttpResponseBadRequest('image_path is not valid')
    
    # parse the cropping string
    try:
        x, y, width, height= map(int, cropping.split(','))
    except ValueError:
        return HttpResponseBadRequest('cropping is not valid')
    
    # open the image
    with open(image_full_path, 'rb') as f:
        image = Image.open(f)
        
        # crop the image
        cropped_image = image.crop((x, y, x + width, y + height))
        
        # create a new file name for the cropped image
        file_name, ext = os.path.splitext(os.path.basename(image_path))
        cropped_file_name = f"{file_name}_cropped{ext}"
        
        # save the cropped image to a temporary file with the new file name
        temp_file = os.path.join(settings.MEDIA_ROOT, type, cropped_file_name)
        cropped_image.save(temp_file)
        
        # return the URL of the cropped image
        return HttpResponse(os.path.join(settings.MEDIA_URL, type , cropped_file_name))

