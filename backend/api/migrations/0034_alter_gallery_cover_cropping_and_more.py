# Generated by Django 4.2 on 2023-04-18 22:32

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_remove_gallery_cropping_gallery_cover_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='cover_cropping',
            field=image_cropping.fields.ImageRatioField('image', '1000x1000', adapt_rotation=False, allow_fullsize=True, free_crop=False, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cover cropping'),
        ),
        migrations.AlterField(
            model_name='gallery',
            name='image_cropping',
            field=image_cropping.fields.ImageRatioField('image', '1000x1000', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='image cropping'),
        ),
    ]