import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import fonts from '../assets/data/fonts';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets//data/categoriesData';
import popularData from '../assets/data/popularData';
import Button from './Button';

let Details = props => {
  let {route, navigation} = props;
  let {item} = route.params;

  let RenderIngredientsItems = ({item}) => {
    return (
      <View
        style={[
          s.ingredientImageWrapper,
          {marginLeft: item.id == '1' ? 15 : 0},
        ]}>
        <Image source={item.image} style={s.ingredientImage} />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={s.container}>
        {/* Header */}
        <SafeAreaView>
          <View style={s.headerWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={s.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </TouchableOpacity>
            <View style={s.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={s.titlesWrapper}>
          <Text style={s.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={s.priceWrapper}>
          <Text style={s.priceText}>${item.price}</Text>
        </View>

        {/* Pizza Info */}
        <View style={s.infoWrapper}>
          <View style={s.infoLeftWrapper}>
            <View style={s.infoItemWrapper}>
              <Text style={s.infoItemTitle}>size</Text>
              <Text style={s.infoItemText}>
                {item.sizeName} {item.sizeNumber}
              </Text>
            </View>
            <View style={s.infoItemWrapper}>
              <Text style={s.infoItemTitle}>crust</Text>
              <Text style={s.infoItemText}>{item.crust}</Text>
            </View>
            <View style={s.infoItemWrapper}>
              <Text style={s.infoItemTitle}>Delivery In</Text>
              <Text style={s.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View style={s.infoRightWrapper}>
            <Image source={item.image} style={s.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={s.ingredientsWrapper}>
          <Text style={s.ingredientsTitle}>ingredients</Text>
          <View style={s.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={RenderIngredientsItems}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Place An Order */}
        <TouchableOpacity
          onPress={() => alert("Parcel Is On It's Way")}
          style={s.placeAnOrderWrapper}>
          <Text style={s.placeAnOrderBtnText}>Place An Order</Text>
          <Feather name="chevron-right" size={16} color={colors.black} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    width: '70%',
    fontFamily: fonts.fBold,
    fontSize: 32,
    color: colors.textDark,
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  priceText: {
    color: colors.price,
    fontFamily: fonts.fBold,
    fontSize: 32,
  },
  infoWrapper: {
    // paddingHorizontal: 20,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: fonts.fMedium,
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: fonts.fSemiBold,
    fontSize: 18,
    color: colors.textDark,
  },
  infoRightWrapper: {},
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: fonts.fBold,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  ingredientsListWrapper: {
    // paddingHorizontal: 20,
    marginTop: 10,
  },
  ingredientImageWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  ingredientImage: {
    resizeMode: 'contain',
  },
  placeAnOrderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  placeAnOrderBtnText: {
    fontFamily: fonts.fBold,
    fontSize: 14,
    marginRight: 10,
    color: colors.black,
  },
});

export default Details;
