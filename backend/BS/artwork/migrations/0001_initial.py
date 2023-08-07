# Generated by Django 4.1.10 on 2023-08-06 11:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('exhibition', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Voronoiresult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('point1id', models.IntegerField()),
                ('point2id', models.IntegerField()),
                ('cwartworkid', models.IntegerField()),
                ('ccwartworkid', models.IntegerField()),
                ('exhibition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exhibition.exhibition')),
            ],
            options={
                'db_table': 'voronoiresult',
            },
        ),
        migrations.CreateModel(
            name='Voronoipoint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pointid', models.IntegerField()),
                ('coorx', models.FloatField()),
                ('coory', models.FloatField()),
                ('exhibition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exhibition.exhibition')),
            ],
            options={
                'db_table': 'voronoipoint',
            },
        ),
        migrations.CreateModel(
            name='Artwork',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('artworkid', models.IntegerField()),
                ('coorx', models.FloatField()),
                ('coory', models.FloatField()),
                ('exhibition', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exhibition.exhibition')),
            ],
            options={
                'db_table': 'artwork',
            },
        ),
    ]