# Generated by Django 4.2 on 2023-04-17 11:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_alter_gallery_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gallery',
            old_name='name',
            new_name='title',
        ),
    ]
