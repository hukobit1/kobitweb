# Generated by Django 4.2 on 2023-04-11 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_alter_member_category_alter_sliderimage_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='image',
            field=models.ImageField(upload_to='events/'),
        ),
        migrations.AlterField(
            model_name='member',
            name='photo',
            field=models.ImageField(upload_to='members/'),
        ),
        migrations.AlterField(
            model_name='sliderimage',
            name='image',
            field=models.ImageField(upload_to='sliders/'),
        ),
    ]
