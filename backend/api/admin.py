# from .forms import ProcessedImageField
from .models import SliderImage, Member, Event, SiteData, PositionCategory
from django.contrib import admin
from image_cropping import ImageCroppingMixin
from .forms import SliderImageForm, MemberForm, EventForm


@admin.register(SliderImage)
class SliderModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = SliderImageForm

@admin.register(Member)
class MemberModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = MemberForm
    
@admin.register(Event)
class EventModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    form = EventForm


admin.site.register(PositionCategory)
admin.site.register(SiteData)
