from django.contrib import admin
from .models import SliderImage, Member, Event, SiteData

# Register your models here.

admin.site.register(SliderImage)
admin.site.register(Member)
admin.site.register(Event)
admin.site.register(SiteData)
