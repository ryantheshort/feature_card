from django.urls import path
from .views import CourseDetailAPIView, CourseListAPIView

urlpatterns = [
    path('courses/<int:pk>', CourseDetailAPIView.as_view()),
    path('courses/', CourseListAPIView.as_view()),
]