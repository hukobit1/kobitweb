from django.contrib import admin
from image_cropping import ImageCroppingMixin
from .models import ( SliderImage, Member, 
		      Event, SiteData, 
		      PositionCategory, Gallery )
from .forms import ( SliderImageForm, MemberForm, 
		     EventForm, GalleryForm )


@admin.register(SliderImage)
class SliderModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = SliderImageForm

@admin.register(Member)
class MemberModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = MemberForm
    
@admin.register(Event)
class EventModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = EventForm
    

@admin.register(Gallery)
class GalleryModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = GalleryForm


admin.site.register(PositionCategory)
admin.site.register(SiteData)
