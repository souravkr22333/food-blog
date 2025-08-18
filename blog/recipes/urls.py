from django.urls import path
from .views import RecipeListCreateView, RecipeDetailView,RecipeListView, RecipecardView

urlpatterns = [
    path('recipe/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),
    path('recipes/',RecipeListView.as_view(),name='all-recipe'),
    path('recipe/<slug:slug>/',RecipecardView.as_view(), name='recipe-card')
]