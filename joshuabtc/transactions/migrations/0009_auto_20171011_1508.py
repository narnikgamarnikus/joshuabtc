# -*- coding: utf-8 -*-
# Generated by Django 1.10.8 on 2017-10-11 15:08
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('transactions', '0008_auto_20171010_1300'),
    ]

    operations = [
        migrations.CreateModel(
            name='BTC',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.CharField(max_length=150)),
                ('payment_code', models.CharField(max_length=150)),
                ('invoice', models.CharField(max_length=150)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='eth',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='user',
        ),
        migrations.AlterModelOptions(
            name='eth',
            options={},
        ),
        migrations.DeleteModel(
            name='Transaction',
        ),
    ]
