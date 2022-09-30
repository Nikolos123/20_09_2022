from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

# Create your views here.
from .serializers import AuthorModelSerializer, BiographiesModelSerializer, BookModelSerializer
from .models import Author, Book, Biographies


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer


class BiographiesModelViewSet(ModelViewSet):
    queryset = Biographies.objects.all()
    serializer_class = BiographiesModelSerializer


class BookModelViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookModelSerializer
