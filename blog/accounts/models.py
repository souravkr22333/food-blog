from django.db import models
from django.contrib.auth.models import AbstractBaseUser ,PermissionsMixin
from .manager import UserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):
    username= models.CharField(max_length=255, unique=True,null=True)
   
    email = models.EmailField(unique=True, blank=True, null=True)
   
    # name=models.CharField(blank=True,null=True)
    # user_bio = models.TextField(blank=True, null=True)
    # user_profile_image = models.ImageField(upload_to='User' , blank=True, null=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()

    def __str__(self):
        return self.email
    


class UserProfile(models.Model):
    user = models.OneToOneField(
        User, 
        on_delete=models.CASCADE,
        related_name='profile'
    )
    name= models.CharField(max_length=255, blank=True, null=True)
    user_bio = models.TextField(blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    image = models.ImageField(upload_to='profile_images/', null=True, blank=True)
    
    def __str__(self):
        return f"Profile of {self.user.username}"
    
    @property
    def email(self):
        return self.user.email

    @property
    def username(self):
        return self.user.username
    
    @property
    def recipes(self):
        return self.user.recipes.all()
    
    @receiver(post_save, sender=User)
    def create_or_update_user_profile(sender, instance, created, **kwargs):
     if created:
        UserProfile.objects.create(user=instance)
     instance.profile.save()

    