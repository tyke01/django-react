# from rest_framework import serializers
# from .models import *

# class ReactSerialiser(serializers.ModelSerializer):
#     class Meta:
#         model = React
#         fields = ['employee', 'department']

from rest_framework import serializers
from . models import *


class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['employee', 'department']