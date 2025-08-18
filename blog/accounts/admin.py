from django.contrib import admin
from .models import User, UserProfile

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','username','email')
    search_fields = ('id',)
    ordering = ('username',)
    list_filter = ('username',)
  
    fieldsets = (
        (None, {'fields': ('username','email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',  'user_permissions')}),
    )
    

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('id','username','user_bio','name','date_of_birth')
    search_fields = ('id',)
    

