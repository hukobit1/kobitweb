from django.urls import path
from .views import ( SliderImagesView, MembersView, 
		     EventsView, SiteDataView, 
		     PositionCategoriesView, GalleryView )

app_name = 'api'

urlpatterns = [
    path('slider-images/', SliderImagesView.as_view(), name='slider-images'),
    path('members/', MembersView.as_view(), name='members'),
    path('events/', EventsView.as_view(), name='events'),
    path('categories/', PositionCategoriesView.as_view(), name='categories'),
    path('images/', GalleryView.as_view(), name='gallery'),
    path('meta/', SiteDataView.as_view(), name='meta'),
]
