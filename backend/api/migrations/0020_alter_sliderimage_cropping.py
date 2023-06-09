# Generated by Django 4.2 on 2023-04-07 17:30

from django.db import migrations
import image_cropping.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_alter_event_cropping'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sliderimage',
            name='cropping',
            field=image_cropping.fields.ImageRatioField('image', '900x400', adapt_rotation=False, allow_fullsize=False, free_crop=True, help_text=None, hide_image_field=False, size_warning=False, verbose_name='cropping'),
        ),
    ]
