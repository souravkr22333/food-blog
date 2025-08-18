from django.urls import path

from accounts.views import Registerview ,UserProfileDetailView

from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
   
    path('register', Registerview.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<str:username>/', UserProfileDetailView.as_view(), name='recipe-list-create'),
   
]