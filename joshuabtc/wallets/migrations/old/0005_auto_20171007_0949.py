# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-10-07 09:49
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0004_auto_20171007_0948'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eth',
            name='private',
            field=models.CharField(max_length=100),
        ),
    ]