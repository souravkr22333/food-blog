from django.contrib import admin
from .models import User

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id','phone_number','email','user_bio')
    search_fields = ('id',)
    ordering = ('phone_number',)
    list_filter = ('phone_number',)
  
    fieldsets = (
        (None, {'fields': ('phone_number','email', 'password')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',  'user_permissions')}),
    )
    
