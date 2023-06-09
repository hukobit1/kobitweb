# Generated by Django 4.2 on 2023-04-11 09:09

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0024_rename_photo_member_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='cropping',
            field=image_cropping.fields.ImageRatioField('image', '250x250', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping'),
        ),
        migrations.AlterField(
            model_name='member',
            name='cropping',
            field=image_cropping.fields.ImageRatioField('photo', '200x200', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping'),
        ),
        migrations.AlterField(
            model_name='sliderimage',
            name='cropping',
            field=image_cropping.fields.ImageRatioField('image', '900x400', adapt_rotation=False, allow_fullsize=True, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping'),
        ),
    ]
