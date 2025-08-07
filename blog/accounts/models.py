from django.db import models
from django.contrib.auth.models import AbstractBaseUser ,PermissionsMixin
from .manager import UserManager
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):

    phone_number = models.IntegerField(max_length=15, unique=True)
    email = models.EmailField(unique=True, blank=True, null=True)
    user_bio = models.TextField(blank=True, null=True)
    user_profile_image = models.ImageField(upload_to='profile/')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.phone_number

    