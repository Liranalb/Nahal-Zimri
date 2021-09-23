<Collapse>
<CollapseHeader style={styles.typeStyle}>

    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>ציפורים</Text>
    </View>

</CollapseHeader>

<CollapseBody>




    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/bird.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['One']}
                    onPress={() => this.handlePress('One', 'בעלי חיים', 'דרור')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>דרור</Text>
            </View>
        </View>
    </View>


    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/BigHankan.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Two']}
                    onPress={() => this.handlePress('Two', 'בעלי חיים', 'חנקן גדול')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>חנקן גדול</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/summerSil.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Nine']}
                    onPress={() => this.handlePress('Nine', 'בעלי חיים', 'סלעית הקיץ')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>סלעית הקיץ</Text>
            </View>
        </View>
    </View>

</CollapseBody>

</Collapse>

<Collapse>
<CollapseHeader style={styles.typeStyle}>
    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>יונקים</Text>
    </View>


</CollapseHeader>
<CollapseBody>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/fox.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'שועל מצוי')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>שועל מצוי</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/deer.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Six']}
                    onPress={() => this.handlePress('Six', 'בעלי חיים', 'צבי')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>שועל מצוי</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/Shafan.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Four']}
                    onPress={() => this.handlePress('Four', 'בעלי חיים', 'שפן סלע')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>שפן סלע</Text>
            </View>
        </View>
    </View>


</CollapseBody>

</Collapse>

<Collapse>
<CollapseHeader style={styles.typeStyle}>
    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>זוחלים</Text>
    </View>


</CollapseHeader>
<CollapseBody>

<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/zikit.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זיקית')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>זיקית</Text>
            </View>
        </View>
    </View>


<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/zehaman_shahor.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זעמן שחור')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>זעמן שחור</Text>
            </View>
        </View>
    </View>
    

    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/homet_gamad.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חומט גמד')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>חומט גמד</Text>
            </View>
        </View>
    </View>

    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/homet_menumar.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חומט מנומר')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>חומט מנומר</Text>
            </View>
        </View>
    </View>
    
                                        <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/hardon_matzuy.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'חרדון מצוי')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>חרדון מצוי</Text>
            </View>
        </View>
    </View>
    
                                        <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/letaha_zriza.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לטאה זריזה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>לטאה זריזה</Text>
            </View>
        </View>
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/menifanit_mtzuya.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'מניפנית מצויה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>מניפנית מצויה</Text>
            </View>
        </View>
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/nahash.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נחש')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>נחש</Text>
            </View>
        </View>
    </View>
    
                                        <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/tzav_yabasha_matzuy.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'צב יבשה (מצוי)')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>צב יבשה (מצוי)</Text>
            </View>
        </View>
    </View>
    
                                        <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/tzefa_matzui.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'צפע מצוי')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>צפע מצוי</Text>
            </View>
        </View>
    </View>
    
                                        <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/shmamit_habatim.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'שממית בתים')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>שממית בתים</Text>
            </View>
        </View>
    </View>

</CollapseBody>

</Collapse>


<Collapse>
<CollapseHeader style={styles.typeStyle}>
    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>פרפרים</Text>
    </View>


</CollapseHeader>
<CollapseBody>

<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/hasaparit_haseora.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'הספרית השעורה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>הספרית השעורה</Text>
            </View>
        </View>
    </View>


            <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/hasparit_hanashran.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'הספרנית הנשרן')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>הספרנית הנשרן</Text>
            </View>
        </View>
    </View>


    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/zanav_snonit_nahe.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'זנב סנונית נאה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>זנב סנונית נאה</Text>
            </View>
        </View>
    </View>

<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/cahilil_afor.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל האפון')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כחליל האפון</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/cahilil_hahafarkeset.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל האספסת')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כחליל האספסת</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/cahilil_hashabrak.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל השברק')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כחליל השברק</Text>
            </View>
        </View>
    </View>


    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/cahlil_hahomha.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כחליל החומעה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כחליל החומעה</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/ktom_kanaf_metzil.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'כתום כנף המצילתיים')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כתום כנף המצילתיים</Text>
            </View>
        </View>
    </View>
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/levnin_hakasia.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין הכאסיה')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>לבנין הכאסיה</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/levnin_hatiltan.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין התלתן')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>לבנין התלתן</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/levnin_mizrhai.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'לבנין מזרחי')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>לבנין מזרחי</Text>
            </View>
        </View>
    </View>


    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/nimpit_hadardar.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נימפית הדרדר')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>נימפית הדרדר</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/nimpit_hahorshaf.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'נימפית החורשף')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>נימפית החורשף</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/stirit_meshuyeshet.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'סטירית משויישת')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>סטירית משויישת</Text>
            </View>
        </View>
    </View>

    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/tinshemit_hamurkavim.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Three']}
                    onPress={() => this.handlePress('Three', 'בעלי חיים', 'תנשמית המורכבים')}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>תנשמית המורכבים</Text>
            </View>
        </View>
    </View>


</CollapseBody>

</Collapse>

<Collapse>

<CollapseHeader style={styles.typeStyle}>
    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>פריחה</Text>
    </View>


</CollapseHeader>
<CollapseBody>


<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/irus_hasrgel.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "אירוס הסרגל")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>אירוס הסרגל</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/dvoranit_dinsmor.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "דבורנית דינסמור")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>דבורנית דינסמור</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/dam_hamakabim.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "דם המכבים")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>דם המכבים</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/zamzumit_metzuya.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "זמזומית מצויה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>זמזומית מצויה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/calanit_metzuya.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "כלנית מצויה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כלנית מצויה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/carcum_horpi.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "כרכום חורפי")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>כרכום חורפי</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/matziz_suri.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "מציץ סורי")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>מציץ סורי</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/marganit_hasade.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "מרגנית השדה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>מרגנית השדה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/marva.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "מרווה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>מרווה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/nurit_asia.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "נורית אסיה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>נורית אסיה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/netz_halav.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "נץ חלב")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>נץ חלב</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/sahlav_parparni.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "סחלב פרפרני")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>סחלב פרפרני</Text>
            </View>
        </View>

        
    </View>
    

    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/satvanit_hayore.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "סתוונית היורה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>סתוונית היורה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/irit_gdola.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "עירית גדולה")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>עירית גדולה</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/hakuvit_hagalgal.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "עכובית הגלגל")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>עכובית הגלגל</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/pereg.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "פרג")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>פרג</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/kotziz_suri.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "קוציץ סורי")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>קוציץ סורי</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/rakefet.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "רקפת")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>רקפת</Text>
            </View>
        </View>

        
    </View>
    
    
    <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/shum_meshulash.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'פריחה', "שום משולש")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>שום משולש</Text>
            </View>
        </View>

        
    </View>
    
    
        



</CollapseBody>
</Collapse>

<Collapse>

<CollapseHeader style={styles.typeStyle}>

    <View style={styles.innerViewStyle}>
        <Text style={styles.textStyleHeaders}>מפגעים</Text>
    </View>


</CollapseHeader>
<CollapseBody>


<View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Image source={require('../../assets/img/garbage.jpg')}
                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
            />
        </View>
        <View style={{ flex: 2, paddingRight: 10, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <CheckBox
                    checkedIcon={<IconA name="check" size={40} color="#48D347" />}
                    uncheckedIcon={<IconA name="plus" size={40} color="#505050" />}
                    checked={this.state.checkItems['Eight']}
                    onPress={() => this.handlePress('Eight', 'אחר', "פסולת")}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.textStyle}>פסולת</Text>
            </View>
        </View>

        
    </View>

</CollapseBody>
</Collapse>