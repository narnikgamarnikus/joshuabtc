# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-10-04 16:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='amount',
            field=models.CharField(default=0, max_length=53),
        ),
        migrations.AddField(
            model_name='transaction',
            name='is_paid',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='address',
            field=models.CharField(blank=True, max_length=34),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='invoice',
            field=models.CharField(blank=True, max_length=53),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='redeem_code',
            field=models.CharField(blank=True, max_length=53),
        ),
    ]
