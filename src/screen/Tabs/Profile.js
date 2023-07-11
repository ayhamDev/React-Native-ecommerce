import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import colors from "../../utils/colors";

const Profile = () => {
  return (
    <ScrollView
      stickyHeaderHiddenOnScroll={true}
      stickyHeaderIndices={[0]}
      style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}
    >
      <View>
        <Text
          style={{
            paddingHorizontal: 32,
            marginTop: 15,
            marginBottom: 25,
            fontFamily: "quicksand b",
            fontSize: 24,
            paddingRight: 100,
          }}
        >
          Profile
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 32,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          style={{ width: 200, height: 200, borderRadius: 1000 }}
          source={require("../../../assets/demo/user.jpg")}
        />
        <Text
          style={{
            marginTop: 10,
            fontFamily: "quicksand b",
            fontSize: 20,
            color: colors.primary,
          }}
        >
          Ayham Abdul Ghani
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontFamily: "quicksand b",
            fontSize: 16,
            color: colors.primary,
          }}
        >
          +20 100 157 7302
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colors.white,
            margin: 16,
          }}
        ></View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <AntDesign name={"user"} size={18} color={colors.primary} />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Edit Profile
            </Text>
          </View>
          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Ionicons
              name={"location-outline"}
              size={18}
              color={colors.primary}
            />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Addresses
            </Text>
          </View>
          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <MaterialIcons name={"payment"} size={18} color={colors.primary} />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Payment
            </Text>
          </View>
          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Ionicons name={"language"} size={18} color={colors.primary} />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Language
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 8,
            }}
          >
            <Text
              style={{
                fontFamily: "quicksand m",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              English (US)
            </Text>
            <MaterialIcons
              name={"arrow-forward-ios"}
              color={colors.primary}
              size={14}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <MaterialIcons
              name={"lock-outline"}
              size={18}
              color={colors.primary}
            />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Privacy Policy
            </Text>
          </View>

          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Feather name={"help-circle"} size={18} color={colors.primary} />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Help Center
            </Text>
          </View>

          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <MaterialIcons name={"logout"} size={18} color={colors.primary} />
            <Text
              style={{
                fontFamily: "quicksand b",
                fontSize: 14,
                color: colors.primary,
              }}
            >
              Log Out
            </Text>
          </View>

          <MaterialIcons
            name={"arrow-forward-ios"}
            color={colors.primary}
            size={14}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;
