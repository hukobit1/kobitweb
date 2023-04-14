# from .forms import ProcessedImageField
from .models import SliderImage, Member, Event, SiteData, PositionCategory
from django.contrib import admin
from django.db import models
from django.contrib import admin
from image_cropping import ImageCroppingMixin


@admin.register(SliderImage)
class SliderModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass

@admin.register(Member)
class MemberModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass
    
@admin.register(Event)
class EventModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass


admin.site.register(PositionCategory)
admin.site.register(SiteData)
