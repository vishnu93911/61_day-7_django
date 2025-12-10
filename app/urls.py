from django.urls import path

from .views import Home,Contact,About,Login
urlpatterns=[
    path("",Home),   # url/route   view
    path("contact/",Contact),
    path("about/",About),
    path("login/",Login)
]

