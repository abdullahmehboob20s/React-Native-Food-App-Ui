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

let Home = props => {
  let {navigation} = props;

  const RenderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          s.categoryItemWrapper,
          {backgroundColor: item.selected ? colors.primary : colors.white},
        ]}>
        <Image style={s.categoryItemImage} source={item.image} />
        <Text style={s.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            s.categorySelectWrapper,
            {backgroundColor: item.selected ? colors.white : colors.secondary},
          ]}>
          <Feather
            color={item.selected ? colors.black : colors.white}
            name="chevron-right"
            size={14}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}>
      <View style={s.container}>
        {/* header */}
        <SafeAreaView>
          <View style={s.headerWrapper}>
            <Image
              source={require('../assets/images/profile.png')}
              style={s.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/* Titles */}

        <View style={s.titlesWrapper}>
          <Text style={s.titlesSubTitle}>Food</Text>
          <Text style={s.titlesSubTitle_2}>Delivery</Text>
        </View>

        {/* Search */}

        <View style={s.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={s.search}>
            <Text style={s.searchText}>Search</Text>
          </View>
        </View>

        {/* Categories */}

        <View style={s.categoriesWrapper}>
          <Text style={s.categoriesTitle}>Categories</Text>
          <View style={s.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={RenderCategoryItem}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Popular */}

        <View style={s.popularWrapper}>
          <Text style={s.popularTitle}>Popular</Text>
          {popularData.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={1}
                onPress={() => navigation.navigate('Details', {item: item})}>
                <View style={s.popularCardWrapper}>
                  <View>
                    <View>
                      <View style={s.popularTopWrapper}>
                        <MaterialCommunityIcons
                          name="crown"
                          size={12}
                          color={colors.primary}
                        />
                        <Text style={s.popularTopWrapperText}>Top Of Week</Text>
                      </View>

                      <View style={s.popularTitlesWrapper}>
                        <Text style={s.popularTitlesTitle}>{item.title}</Text>
                        <Text style={s.popularTitlesWieght}>
                          Weight : {item.weight}
                        </Text>
                      </View>
                    </View>

                    <View style={s.popularCardBottom}>
                      <View style={s.addPizzaBtn}>
                        <Feather
                          name="plus"
                          size={10}
                          color={colors.textDark}
                        />
                      </View>
                      <View style={s.ratingWrapper}>
                        <MaterialCommunityIcons
                          name="star"
                          size={10}
                          color={colors.textDark}
                        />
                        <Text style={s.ratings}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={s.popularCardRight}>
                    <Image style={s.popularCardImage} source={item.image} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

let s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    paddingBottom: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubTitle: {
    fontFamily: fonts.fRegular,
    fontSize: 20,
    color: colors.textDark,
  },
  titlesSubTitle_2: {
    fontFamily: fonts.fBold,
    fontSize: 32,
    color: colors.textDark,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: fonts.fSemiBold,
    fontSize: 14,
    marginBottom: 5,
    color: colors.textLight,
  },
  categoriesWrapper: {
    marginTop: 30,
    // backgroundColor: 'red',
  },
  categoriesTitle: {
    fontFamily: fonts.fBold,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    // backgroundColor: 'green',
    paddingHorizontal: 20,
  },
  categoryItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 5,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    alignSelf: 'center',
    fontFamily: fonts.fMedium,
    marginTop: 10,
  },
  categorySelectWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: 'white',
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: fonts.fBold,
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopWrapperText: {
    marginLeft: 10,
    fontFamily: fonts.fSemiBold,
    fontSize: 14,
  },
  popularTitlesWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: fonts.fSemiBold,
    fontSize: 14,
    color: colors.textDark,
  },
  popularTitlesWieght: {
    fontFamily: fonts.fMedium,
    fontSize: 12,
    color: colors.textLight,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizzaBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  ratings: {
    fontFamily: fonts.fSemiBold,
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
