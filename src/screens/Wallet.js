import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import CText from '../components/CText';
import { fontSize } from '../constants/theme';
import useCustomTheme from '../util/hooks/useCustomTheme';
import { StateContext } from '../util/context/reducer';

const Wallet = ({ navigation }) => {
	const { colors } = useCustomTheme();
	const state = useContext(StateContext);
	const styles = customStyles(colors);

	useEffect(() => {
		navigation.setOptions({
			headerTintColor: colors.primary,
		})
	},[navigation])
	return (
		<View style={styles.container}>
			<CText style={{fontSize: fontSize.small}}>You have {state.coin} coins in your wallet</CText>
		</View>

	);
}
export default Wallet;

const customStyles = colors => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
		justifyContent: 'center',
		alignItems: 'center'
	}
})