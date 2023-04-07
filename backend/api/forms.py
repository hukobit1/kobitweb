from django import forms
from django.forms import ClearableFileInput
from django.forms import BoundField
from imagekit.forms.fields import ProcessedImageField as BaseProcessedImageField
from .models import SliderImage



class ProcessedImageField(BaseProcessedImageField):
    needs_multipart_form = True

    def __init__(self, *args, **kwargs):
        kwargs['spec_id'] = 'thumbnail'
        super().__init__(*args, **kwargs)



class SliderImageForm(forms.ModelForm):
    image = forms.ImageField(widget=ClearableFileInput(attrs={'multiple': True}))

    class Meta:
        model = SliderImage
        fields = '__all__'
        widgets = {
            'image': ClearableFileInput(attrs={'multiple': True}),
            'thumbnail': forms.ClearableFileInput(),
        }
