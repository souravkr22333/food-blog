from accounts.models import User
from rest_framework import serializers

class Userserializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length=55,write_only=True, style={'input_type':"password"})
    class Meta:
        model=User
        fields=['id','phone_number','email','password']

    def create(self, validated_data):
        user = User.objects.create_user(
            phone_number=validated_data['phone_number'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        return user
       