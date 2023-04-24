from django.contrib import admin
from image_cropping import ImageCroppingMixin
from adminsortable2.admin import SortableAdminMixin
from .models import ( SliderImage, Member, 
		      Event, SiteData, 
		      PositionCategory, Gallery )
from .forms import ( SliderImageForm, MemberForm, 
		     EventForm, GalleryForm )


@admin.register(SliderImage)
class SliderModelAdmin(ImageCroppingMixin, SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'my_order']
    ordering = ['my_order']
    form = SliderImageForm

@admin.register(Member)
class MemberModelAdmin(ImageCroppingMixin, SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'position', 'category', 'my_order']
    ordering = ['my_order']
    form = MemberForm
    
@admin.register(Event)
class EventModelAdmin(ImageCroppingMixin, SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'date', 'my_order']
    ordering = ['my_order']
    form = EventForm
    
@admin.register(Gallery)
class GalleryModelAdmin(ImageCroppingMixin, SortableAdminMixin, admin.ModelAdmin):
    list_display = ['title', 'my_order']
    ordering = ['my_order']
    form = GalleryForm

@admin.register(PositionCategory)
class PositionCategoryModelAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['name', 'my_order']
    ordering = ['my_order']
    pass
    
@admin.register(SiteData)
class SiteDataModelAdmin(admin.ModelAdmin):
    pass
