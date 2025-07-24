from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

class Trip(models.Model):
    PUBLICITY_CHOICES = [
        ('public', 'Public'),
        ('private', 'Private')
    ]

    destination = models.CharField(
        max_length=100,
    ) # need to validate ts
    startDate = models.DateField()
    endDate  = models.DateField()
    description = models.TextField(max_length=450) # max length?
    photos = models.ImageField() # work on it, instal Pillow (?)
    publicity = models.CharField(
        max_length=7,
        choices=PUBLICITY_CHOICES
    )

    creationDate = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="trips")

    def clean(self):
        super().clean()

        if self.endDate < self.startDate:
            raise ValidationError("End date cannot be before start date.")
        
        # TODO more validations

        # TODO photos length at least one




# TODO migrations