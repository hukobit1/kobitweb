from django import forms
from .models import ( SliderImage, Member,
		      Event, Gallery )


class SliderImageForm(forms.ModelForm):
	class Meta:
	        model = SliderImage
	        fields = '__all__'
	        widgets = {
	            'cropped_image': forms.HiddenInput,
	        }


class MemberForm(forms.ModelForm):
	class Meta:
	        model = Member
	        fields = '__all__'
	        widgets = {
	            'cropped_image': forms.HiddenInput,
	        }


class EventForm(forms.ModelForm):
	class Meta:
	        model = Event
	        fields = '__all__'
	        widgets = {
	            'cropped_image': forms.HiddenInput,
	        }


class GalleryForm(forms.ModelForm):
	class Meta:
	        model = Gallery
	        fields = '__all__'
	        widgets = {
	            'cropped_image': forms.HiddenInput,
	        }
