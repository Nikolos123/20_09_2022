from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer,StringRelatedField

from .models import Author, Book, Biographies


class AuthorModelSerializer(ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BiographiesModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Biographies
        fields = '__all__'


class BookModelSerializer(ModelSerializer):

    # authors = StringRelatedField(many=True)
    class Meta:
        model = Book
        fields = '__all__'
