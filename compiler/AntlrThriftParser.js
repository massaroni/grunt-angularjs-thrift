// $ANTLR 3.3 Nov 30, 2010 12:50:56 ./grammars/AntlrThrift.g 2015-02-04 08:00:16

var AntlrThriftParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    AntlrThriftParser.superclass.constructor.call(this, input, state);

    this.dfa3 = new AntlrThriftParser.DFA3(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(AntlrThriftParser, {
    EOF: -1,
    T__69: 69,
    T__70: 70,
    T__71: 71,
    T__72: 72,
    T__73: 73,
    T__74: 74,
    T__75: 75,
    T__76: 76,
    T__77: 77,
    T__78: 78,
    T__79: 79,
    T__80: 80,
    T__81: 81,
    T__82: 82,
    T__83: 83,
    T__84: 84,
    T__85: 85,
    T__86: 86,
    T__87: 87,
    T__88: 88,
    T__89: 89,
    T__90: 90,
    T__91: 91,
    T__92: 92,
    T__93: 93,
    T__94: 94,
    T__95: 95,
    T__96: 96,
    T__97: 97,
    T__98: 98,
    T__99: 99,
    T__100: 100,
    T__101: 101,
    T__102: 102,
    T__103: 103,
    T__104: 104,
    T__105: 105,
    T__106: 106,
    T__107: 107,
    T__108: 108,
    T__109: 109,
    T__110: 110,
    T__111: 111,
    T__112: 112,
    T__113: 113,
    T__114: 114,
    T__115: 115,
    T__116: 116,
    T__117: 117,
    T__118: 118,
    T__119: 119,
    T__120: 120,
    T__121: 121,
    T__122: 122,
    T__123: 123,
    T__124: 124,
    T__125: 125,
    T__126: 126,
    COCOA: 4,
    CONST: 5,
    CONST_LIST: 6,
    CONST_MAP: 7,
    CPP: 8,
    CPP_INCLUDE: 9,
    CPP_TYPE: 10,
    CSHARP: 11,
    DEFAULT: 12,
    ENUM: 13,
    ENUM_DEF: 14,
    EXCEPTION: 15,
    EXTENDS: 16,
    FIELD: 17,
    FUNCTION: 18,
    INCLUDE: 19,
    JAVA: 20,
    LIST: 21,
    MAP: 22,
    NAMESPACE: 23,
    ONEWAY: 24,
    PAIR: 25,
    PERL: 26,
    PHP: 27,
    PROGRAM: 28,
    PY: 29,
    REQUIRED: 30,
    SENUM: 31,
    STRING: 32,
    BINARY: 33,
    SLIST: 34,
    BOOL: 35,
    BYTE: 36,
    I16: 37,
    I32: 38,
    I64: 39,
    DOUBLE: 40,
    VOID: 41,
    OPTIONAL: 42,
    RB: 43,
    SERVICE: 44,
    SET: 45,
    SMALLTALK_CATEGORY: 46,
    SMALLTALK_PREFIX: 47,
    STAR: 48,
    STRUCT: 49,
    THROWS: 50,
    TYPEDEF: 51,
    TYPE_ANNOTATION: 52,
    UNION: 53,
    XSD: 54,
    XSD_ALL: 55,
    XSD_ATTRIBUTES: 56,
    XSD_NILLABLE: 57,
    XSD_OPTIONAL: 58,
    LITERAL: 59,
    IDENTIFIER: 60,
    ST_IDENTIFIER: 61,
    DUBCONSTANT: 62,
    INTCONSTANT: 63,
    HEXCONSTANT: 64,
    WHITESPACE: 65,
    MULTICOMM: 66,
    COMMENT: 67,
    UNIXCOMMENT: 68
});

(function(){
// public class variables
var EOF= -1,
    T__69= 69,
    T__70= 70,
    T__71= 71,
    T__72= 72,
    T__73= 73,
    T__74= 74,
    T__75= 75,
    T__76= 76,
    T__77= 77,
    T__78= 78,
    T__79= 79,
    T__80= 80,
    T__81= 81,
    T__82= 82,
    T__83= 83,
    T__84= 84,
    T__85= 85,
    T__86= 86,
    T__87= 87,
    T__88= 88,
    T__89= 89,
    T__90= 90,
    T__91= 91,
    T__92= 92,
    T__93= 93,
    T__94= 94,
    T__95= 95,
    T__96= 96,
    T__97= 97,
    T__98= 98,
    T__99= 99,
    T__100= 100,
    T__101= 101,
    T__102= 102,
    T__103= 103,
    T__104= 104,
    T__105= 105,
    T__106= 106,
    T__107= 107,
    T__108= 108,
    T__109= 109,
    T__110= 110,
    T__111= 111,
    T__112= 112,
    T__113= 113,
    T__114= 114,
    T__115= 115,
    T__116= 116,
    T__117= 117,
    T__118= 118,
    T__119= 119,
    T__120= 120,
    T__121= 121,
    T__122= 122,
    T__123= 123,
    T__124= 124,
    T__125= 125,
    T__126= 126,
    COCOA= 4,
    CONST= 5,
    CONST_LIST= 6,
    CONST_MAP= 7,
    CPP= 8,
    CPP_INCLUDE= 9,
    CPP_TYPE= 10,
    CSHARP= 11,
    DEFAULT= 12,
    ENUM= 13,
    ENUM_DEF= 14,
    EXCEPTION= 15,
    EXTENDS= 16,
    FIELD= 17,
    FUNCTION= 18,
    INCLUDE= 19,
    JAVA= 20,
    LIST= 21,
    MAP= 22,
    NAMESPACE= 23,
    ONEWAY= 24,
    PAIR= 25,
    PERL= 26,
    PHP= 27,
    PROGRAM= 28,
    PY= 29,
    REQUIRED= 30,
    SENUM= 31,
    STRING= 32,
    BINARY= 33,
    SLIST= 34,
    BOOL= 35,
    BYTE= 36,
    I16= 37,
    I32= 38,
    I64= 39,
    DOUBLE= 40,
    VOID= 41,
    OPTIONAL= 42,
    RB= 43,
    SERVICE= 44,
    SET= 45,
    SMALLTALK_CATEGORY= 46,
    SMALLTALK_PREFIX= 47,
    STAR= 48,
    STRUCT= 49,
    THROWS= 50,
    TYPEDEF= 51,
    TYPE_ANNOTATION= 52,
    UNION= 53,
    XSD= 54,
    XSD_ALL= 55,
    XSD_ATTRIBUTES= 56,
    XSD_NILLABLE= 57,
    XSD_OPTIONAL= 58,
    LITERAL= 59,
    IDENTIFIER= 60,
    ST_IDENTIFIER= 61,
    DUBCONSTANT= 62,
    INTCONSTANT= 63,
    HEXCONSTANT= 64,
    WHITESPACE= 65,
    MULTICOMM= 66,
    COMMENT= 67,
    UNIXCOMMENT= 68;

// public instance methods/vars
org.antlr.lang.extend(AntlrThriftParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return AntlrThriftParser.tokenNames; },
    getGrammarFileName: function() { return "./grammars/AntlrThrift.g"; }
});
org.antlr.lang.augmentObject(AntlrThriftParser.prototype, {

    // inline static return class
    program_return: (function() {
        AntlrThriftParser.program_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.program_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:97:1: program : ( header )* ( definition )* -> ^( PROGRAM ( header )* ( definition )* ) ;
    // $ANTLR start "program"
    program: function() {
        var retval = new AntlrThriftParser.program_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var header1 = null;
         var definition2 = null;

        var stream_definition=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule definition");
        var stream_header=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule header");
        try {
            // ./grammars/AntlrThrift.g:97:8: ( ( header )* ( definition )* -> ^( PROGRAM ( header )* ( definition )* ) )
            // ./grammars/AntlrThrift.g:98:3: ( header )* ( definition )*
            // ./grammars/AntlrThrift.g:98:3: ( header )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>=69 && LA1_0<=71)||(LA1_0>=73 && LA1_0<=83)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ./grammars/AntlrThrift.g:98:3: header
                    this.pushFollow(AntlrThriftParser.FOLLOW_header_in_program346);
                    header1=this.header();

                    this.state._fsp--;

                    stream_header.add(header1.getTree());


                    break;

                default :
                    break loop1;
                }
            } while (true);

            // ./grammars/AntlrThrift.g:98:11: ( definition )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( (LA2_0==84||LA2_0==87||(LA2_0>=91 && LA2_0<=92)||(LA2_0>=96 && LA2_0<=97)||(LA2_0>=102 && LA2_0<=103)) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // ./grammars/AntlrThrift.g:98:11: definition
                    this.pushFollow(AntlrThriftParser.FOLLOW_definition_in_program349);
                    definition2=this.definition();

                    this.state._fsp--;

                    stream_definition.add(definition2.getTree());


                    break;

                default :
                    break loop2;
                }
            } while (true);



            // AST REWRITE
            // elements: definition, header
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 98:23: -> ^( PROGRAM ( header )* ( definition )* )
            {
                // ./grammars/AntlrThrift.g:98:26: ^( PROGRAM ( header )* ( definition )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(PROGRAM, "PROGRAM"), root_1);

                // ./grammars/AntlrThrift.g:98:36: ( header )*
                while ( stream_header.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_header.nextTree());

                }
                stream_header.reset();
                // ./grammars/AntlrThrift.g:98:44: ( definition )*
                while ( stream_definition.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_definition.nextTree());

                }
                stream_definition.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    header_return: (function() {
        AntlrThriftParser.header_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.header_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:100:1: header : ( 'include' LITERAL -> ^( INCLUDE LITERAL ) | 'cpp_include' LITERAL -> ^( CPP_INCLUDE LITERAL ) | 'namespace' t= IDENTIFIER n= IDENTIFIER -> ^( NAMESPACE $t $n) | 'namespace' '*' IDENTIFIER -> ^( NAMESPACE STAR IDENTIFIER ) | 'cpp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cpp'] IDENTIFIER ) | 'php_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['php'] IDENTIFIER ) | 'py_module' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['py'] IDENTIFIER ) | 'perl_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['perl'] IDENTIFIER ) | 'ruby_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['rb'] IDENTIFIER ) | 'smalltalk_category' ST_IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.category'] ST_IDENTIFIER ) | 'smalltalk_prefix' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.prefix'] IDENTIFIER ) | 'java_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['java'] IDENTIFIER ) | 'cocoa_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cocoa'] IDENTIFIER ) | 'xsd_namespace' LITERAL -> ^( NAMESPACE IDENTIFIER['xsd'] LITERAL ) | 'csharp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['csharp'] IDENTIFIER ) );
    // $ANTLR start "header"
    header: function() {
        var retval = new AntlrThriftParser.header_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var t = null;
        var n = null;
        var string_literal3 = null;
        var LITERAL4 = null;
        var string_literal5 = null;
        var LITERAL6 = null;
        var string_literal7 = null;
        var string_literal8 = null;
        var char_literal9 = null;
        var IDENTIFIER10 = null;
        var string_literal11 = null;
        var IDENTIFIER12 = null;
        var string_literal13 = null;
        var IDENTIFIER14 = null;
        var string_literal15 = null;
        var IDENTIFIER16 = null;
        var string_literal17 = null;
        var IDENTIFIER18 = null;
        var string_literal19 = null;
        var IDENTIFIER20 = null;
        var string_literal21 = null;
        var ST_IDENTIFIER22 = null;
        var string_literal23 = null;
        var IDENTIFIER24 = null;
        var string_literal25 = null;
        var IDENTIFIER26 = null;
        var string_literal27 = null;
        var IDENTIFIER28 = null;
        var string_literal29 = null;
        var LITERAL30 = null;
        var string_literal31 = null;
        var IDENTIFIER32 = null;

        var t_tree=null;
        var n_tree=null;
        var string_literal3_tree=null;
        var LITERAL4_tree=null;
        var string_literal5_tree=null;
        var LITERAL6_tree=null;
        var string_literal7_tree=null;
        var string_literal8_tree=null;
        var char_literal9_tree=null;
        var IDENTIFIER10_tree=null;
        var string_literal11_tree=null;
        var IDENTIFIER12_tree=null;
        var string_literal13_tree=null;
        var IDENTIFIER14_tree=null;
        var string_literal15_tree=null;
        var IDENTIFIER16_tree=null;
        var string_literal17_tree=null;
        var IDENTIFIER18_tree=null;
        var string_literal19_tree=null;
        var IDENTIFIER20_tree=null;
        var string_literal21_tree=null;
        var ST_IDENTIFIER22_tree=null;
        var string_literal23_tree=null;
        var IDENTIFIER24_tree=null;
        var string_literal25_tree=null;
        var IDENTIFIER26_tree=null;
        var string_literal27_tree=null;
        var IDENTIFIER28_tree=null;
        var string_literal29_tree=null;
        var LITERAL30_tree=null;
        var string_literal31_tree=null;
        var IDENTIFIER32_tree=null;
        var stream_79=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 79");
        var stream_78=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 78");
        var stream_69=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 69");
        var stream_77=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 77");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_LITERAL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LITERAL");
        var stream_82=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 82");
        var stream_83=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 83");
        var stream_70=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 70");
        var stream_80=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 80");
        var stream_71=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 71");
        var stream_81=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 81");
        var stream_72=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 72");
        var stream_ST_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token ST_IDENTIFIER");
        var stream_73=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 73");
        var stream_74=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 74");
        var stream_75=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 75");
        var stream_76=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 76");

        try {
            // ./grammars/AntlrThrift.g:100:7: ( 'include' LITERAL -> ^( INCLUDE LITERAL ) | 'cpp_include' LITERAL -> ^( CPP_INCLUDE LITERAL ) | 'namespace' t= IDENTIFIER n= IDENTIFIER -> ^( NAMESPACE $t $n) | 'namespace' '*' IDENTIFIER -> ^( NAMESPACE STAR IDENTIFIER ) | 'cpp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cpp'] IDENTIFIER ) | 'php_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['php'] IDENTIFIER ) | 'py_module' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['py'] IDENTIFIER ) | 'perl_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['perl'] IDENTIFIER ) | 'ruby_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['rb'] IDENTIFIER ) | 'smalltalk_category' ST_IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.category'] ST_IDENTIFIER ) | 'smalltalk_prefix' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.prefix'] IDENTIFIER ) | 'java_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['java'] IDENTIFIER ) | 'cocoa_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cocoa'] IDENTIFIER ) | 'xsd_namespace' LITERAL -> ^( NAMESPACE IDENTIFIER['xsd'] LITERAL ) | 'csharp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['csharp'] IDENTIFIER ) )
            var alt3=15;
            alt3 = this.dfa3.predict(this.input);
            switch (alt3) {
                case 1 :
                    // ./grammars/AntlrThrift.g:101:3: 'include' LITERAL
                    string_literal3=this.match(this.input,69,AntlrThriftParser.FOLLOW_69_in_header371);  
                    stream_69.add(string_literal3);

                    LITERAL4=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_header388);  
                    stream_LITERAL.add(LITERAL4);



                    // AST REWRITE
                    // elements: LITERAL
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 101:42: -> ^( INCLUDE LITERAL )
                    {
                        // ./grammars/AntlrThrift.g:101:45: ^( INCLUDE LITERAL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(INCLUDE, "INCLUDE"), root_1);

                        this.adaptor.addChild(root_1, stream_LITERAL.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:102:3: 'cpp_include' LITERAL
                    string_literal5=this.match(this.input,70,AntlrThriftParser.FOLLOW_70_in_header408);  
                    stream_70.add(string_literal5);

                    LITERAL6=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_header421);  
                    stream_LITERAL.add(LITERAL6);



                    // AST REWRITE
                    // elements: LITERAL
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 102:42: -> ^( CPP_INCLUDE LITERAL )
                    {
                        // ./grammars/AntlrThrift.g:102:45: ^( CPP_INCLUDE LITERAL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(CPP_INCLUDE, "CPP_INCLUDE"), root_1);

                        this.adaptor.addChild(root_1, stream_LITERAL.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:103:3: 'namespace' t= IDENTIFIER n= IDENTIFIER
                    string_literal7=this.match(this.input,71,AntlrThriftParser.FOLLOW_71_in_header442);  
                    stream_71.add(string_literal7);

                    t=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header446);  
                    stream_IDENTIFIER.add(t);

                    n=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header450);  
                    stream_IDENTIFIER.add(n);



                    // AST REWRITE
                    // elements: t, n
                    // token labels: t, n
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_t=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token t",t);
                    var stream_n=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token n",n);
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 103:42: -> ^( NAMESPACE $t $n)
                    {
                        // ./grammars/AntlrThrift.g:103:45: ^( NAMESPACE $t $n)
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, stream_t.nextNode());
                        this.adaptor.addChild(root_1, stream_n.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 4 :
                    // ./grammars/AntlrThrift.g:104:3: 'namespace' '*' IDENTIFIER
                    string_literal8=this.match(this.input,71,AntlrThriftParser.FOLLOW_71_in_header469);  
                    stream_71.add(string_literal8);

                    char_literal9=this.match(this.input,72,AntlrThriftParser.FOLLOW_72_in_header471);  
                    stream_72.add(char_literal9);

                    IDENTIFIER10=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header482);  
                    stream_IDENTIFIER.add(IDENTIFIER10);



                    // AST REWRITE
                    // elements: IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 104:42: -> ^( NAMESPACE STAR IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:104:45: ^( NAMESPACE STAR IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(STAR, "STAR"));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 5 :
                    // ./grammars/AntlrThrift.g:105:3: 'cpp_namespace' IDENTIFIER
                    string_literal11=this.match(this.input,73,AntlrThriftParser.FOLLOW_73_in_header501);  
                    stream_73.add(string_literal11);

                    IDENTIFIER12=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header512);  
                    stream_IDENTIFIER.add(IDENTIFIER12);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 105:42: -> ^( NAMESPACE IDENTIFIER['cpp'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:105:45: ^( NAMESPACE IDENTIFIER['cpp'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'cpp'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 6 :
                    // ./grammars/AntlrThrift.g:106:3: 'php_namespace' IDENTIFIER
                    string_literal13=this.match(this.input,74,AntlrThriftParser.FOLLOW_74_in_header532);  
                    stream_74.add(string_literal13);

                    IDENTIFIER14=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header543);  
                    stream_IDENTIFIER.add(IDENTIFIER14);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 106:42: -> ^( NAMESPACE IDENTIFIER['php'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:106:45: ^( NAMESPACE IDENTIFIER['php'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'php'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 7 :
                    // ./grammars/AntlrThrift.g:107:3: 'py_module' IDENTIFIER
                    string_literal15=this.match(this.input,75,AntlrThriftParser.FOLLOW_75_in_header563);  
                    stream_75.add(string_literal15);

                    IDENTIFIER16=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header578);  
                    stream_IDENTIFIER.add(IDENTIFIER16);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 107:42: -> ^( NAMESPACE IDENTIFIER['py'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:107:45: ^( NAMESPACE IDENTIFIER['py'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'py'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 8 :
                    // ./grammars/AntlrThrift.g:108:3: 'perl_package' IDENTIFIER
                    string_literal17=this.match(this.input,76,AntlrThriftParser.FOLLOW_76_in_header598);  
                    stream_76.add(string_literal17);

                    IDENTIFIER18=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header610);  
                    stream_IDENTIFIER.add(IDENTIFIER18);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 108:42: -> ^( NAMESPACE IDENTIFIER['perl'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:108:45: ^( NAMESPACE IDENTIFIER['perl'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'perl'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 9 :
                    // ./grammars/AntlrThrift.g:109:3: 'ruby_namespace' IDENTIFIER
                    string_literal19=this.match(this.input,77,AntlrThriftParser.FOLLOW_77_in_header630);  
                    stream_77.add(string_literal19);

                    IDENTIFIER20=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header640);  
                    stream_IDENTIFIER.add(IDENTIFIER20);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 109:42: -> ^( NAMESPACE IDENTIFIER['rb'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:109:45: ^( NAMESPACE IDENTIFIER['rb'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'rb'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 10 :
                    // ./grammars/AntlrThrift.g:110:3: 'smalltalk_category' ST_IDENTIFIER
                    string_literal21=this.match(this.input,78,AntlrThriftParser.FOLLOW_78_in_header660);  
                    stream_78.add(string_literal21);

                    ST_IDENTIFIER22=this.match(this.input,ST_IDENTIFIER,AntlrThriftParser.FOLLOW_ST_IDENTIFIER_in_header666);  
                    stream_ST_IDENTIFIER.add(ST_IDENTIFIER22);



                    // AST REWRITE
                    // elements: ST_IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 110:42: -> ^( NAMESPACE IDENTIFIER['smalltalk.category'] ST_IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:110:45: ^( NAMESPACE IDENTIFIER['smalltalk.category'] ST_IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'smalltalk.category'));
                        this.adaptor.addChild(root_1, stream_ST_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 11 :
                    // ./grammars/AntlrThrift.g:111:3: 'smalltalk_prefix' IDENTIFIER
                    string_literal23=this.match(this.input,79,AntlrThriftParser.FOLLOW_79_in_header683);  
                    stream_79.add(string_literal23);

                    IDENTIFIER24=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header691);  
                    stream_IDENTIFIER.add(IDENTIFIER24);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 111:42: -> ^( NAMESPACE IDENTIFIER['smalltalk.prefix'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:111:45: ^( NAMESPACE IDENTIFIER['smalltalk.prefix'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'smalltalk.prefix'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 12 :
                    // ./grammars/AntlrThrift.g:112:3: 'java_package' IDENTIFIER
                    string_literal25=this.match(this.input,80,AntlrThriftParser.FOLLOW_80_in_header711);  
                    stream_80.add(string_literal25);

                    IDENTIFIER26=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header723);  
                    stream_IDENTIFIER.add(IDENTIFIER26);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 112:42: -> ^( NAMESPACE IDENTIFIER['java'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:112:45: ^( NAMESPACE IDENTIFIER['java'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'java'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 13 :
                    // ./grammars/AntlrThrift.g:113:3: 'cocoa_package' IDENTIFIER
                    string_literal27=this.match(this.input,81,AntlrThriftParser.FOLLOW_81_in_header743);  
                    stream_81.add(string_literal27);

                    IDENTIFIER28=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header754);  
                    stream_IDENTIFIER.add(IDENTIFIER28);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 113:42: -> ^( NAMESPACE IDENTIFIER['cocoa'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:113:45: ^( NAMESPACE IDENTIFIER['cocoa'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'cocoa'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 14 :
                    // ./grammars/AntlrThrift.g:114:3: 'xsd_namespace' LITERAL
                    string_literal29=this.match(this.input,82,AntlrThriftParser.FOLLOW_82_in_header774);  
                    stream_82.add(string_literal29);

                    LITERAL30=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_header785);  
                    stream_LITERAL.add(LITERAL30);



                    // AST REWRITE
                    // elements: LITERAL
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 114:42: -> ^( NAMESPACE IDENTIFIER['xsd'] LITERAL )
                    {
                        // ./grammars/AntlrThrift.g:114:45: ^( NAMESPACE IDENTIFIER['xsd'] LITERAL )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'xsd'));
                        this.adaptor.addChild(root_1, stream_LITERAL.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 15 :
                    // ./grammars/AntlrThrift.g:115:3: 'csharp_namespace' IDENTIFIER
                    string_literal31=this.match(this.input,83,AntlrThriftParser.FOLLOW_83_in_header808);  
                    stream_83.add(string_literal31);

                    IDENTIFIER32=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_header816);  
                    stream_IDENTIFIER.add(IDENTIFIER32);



                    // AST REWRITE
                    // elements: IDENTIFIER, IDENTIFIER
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 115:42: -> ^( NAMESPACE IDENTIFIER['csharp'] IDENTIFIER )
                    {
                        // ./grammars/AntlrThrift.g:115:45: ^( NAMESPACE IDENTIFIER['csharp'] IDENTIFIER )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(NAMESPACE, "NAMESPACE"), root_1);

                        this.adaptor.addChild(root_1, this.adaptor.create(IDENTIFIER, 'csharp'));
                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    definition_return: (function() {
        AntlrThriftParser.definition_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.definition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:117:1: definition : ( const | typeDefinition | service );
    // $ANTLR start "definition"
    definition: function() {
        var retval = new AntlrThriftParser.definition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var const33 = null;
         var typeDefinition34 = null;
         var service35 = null;


        try {
            // ./grammars/AntlrThrift.g:117:11: ( const | typeDefinition | service )
            var alt4=3;
            switch ( this.input.LA(1) ) {
            case 92:
                alt4=1;
                break;
            case 84:
            case 87:
            case 91:
            case 96:
            case 97:
            case 102:
                alt4=2;
                break;
            case 103:
                alt4=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }

            switch (alt4) {
                case 1 :
                    // ./grammars/AntlrThrift.g:118:3: const
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_const_in_definition839);
                    const33=this.const();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, const33.getTree());


                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:119:3: typeDefinition
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_typeDefinition_in_definition845);
                    typeDefinition34=this.typeDefinition();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, typeDefinition34.getTree());


                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:120:3: service
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_service_in_definition851);
                    service35=this.service();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, service35.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typeDefinition_return: (function() {
        AntlrThriftParser.typeDefinition_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.typeDefinition_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:122:1: typeDefinition : ( typedef | enum | senum | struct | union | xception );
    // $ANTLR start "typeDefinition"
    typeDefinition: function() {
        var retval = new AntlrThriftParser.typeDefinition_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var typedef36 = null;
         var enum37 = null;
         var senum38 = null;
         var struct39 = null;
         var union40 = null;
         var xception41 = null;


        try {
            // ./grammars/AntlrThrift.g:122:15: ( typedef | enum | senum | struct | union | xception )
            var alt5=6;
            switch ( this.input.LA(1) ) {
            case 84:
                alt5=1;
                break;
            case 87:
                alt5=2;
                break;
            case 91:
                alt5=3;
                break;
            case 96:
                alt5=4;
                break;
            case 97:
                alt5=5;
                break;
            case 102:
                alt5=6;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }

            switch (alt5) {
                case 1 :
                    // ./grammars/AntlrThrift.g:123:3: typedef
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_typedef_in_typeDefinition860);
                    typedef36=this.typedef();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, typedef36.getTree());


                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:124:3: enum
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_enum_in_typeDefinition866);
                    enum37=this.enum();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, enum37.getTree());


                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:125:3: senum
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_senum_in_typeDefinition872);
                    senum38=this.senum();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, senum38.getTree());


                    break;
                case 4 :
                    // ./grammars/AntlrThrift.g:126:3: struct
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_struct_in_typeDefinition878);
                    struct39=this.struct();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, struct39.getTree());


                    break;
                case 5 :
                    // ./grammars/AntlrThrift.g:127:3: union
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_union_in_typeDefinition884);
                    union40=this.union();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, union40.getTree());


                    break;
                case 6 :
                    // ./grammars/AntlrThrift.g:128:3: xception
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_xception_in_typeDefinition890);
                    xception41=this.xception();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, xception41.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typedef_return: (function() {
        AntlrThriftParser.typedef_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.typedef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:130:1: typedef : 'typedef' fieldType IDENTIFIER ( typeAnnotations )? -> ^( TYPEDEF fieldType IDENTIFIER ( typeAnnotations )? ) ;
    // $ANTLR start "typedef"
    typedef: function() {
        var retval = new AntlrThriftParser.typedef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal42 = null;
        var IDENTIFIER44 = null;
         var fieldType43 = null;
         var typeAnnotations45 = null;

        var string_literal42_tree=null;
        var IDENTIFIER44_tree=null;
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_84=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 84");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:130:8: ( 'typedef' fieldType IDENTIFIER ( typeAnnotations )? -> ^( TYPEDEF fieldType IDENTIFIER ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:131:3: 'typedef' fieldType IDENTIFIER ( typeAnnotations )?
            string_literal42=this.match(this.input,84,AntlrThriftParser.FOLLOW_84_in_typedef899);  
            stream_84.add(string_literal42);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_typedef901);
            fieldType43=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(fieldType43.getTree());
            IDENTIFIER44=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_typedef903);  
            stream_IDENTIFIER.add(IDENTIFIER44);

            // ./grammars/AntlrThrift.g:131:34: ( typeAnnotations )?
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0==105) ) {
                alt6=1;
            }
            switch (alt6) {
                case 1 :
                    // ./grammars/AntlrThrift.g:131:34: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_typedef905);
                    typeAnnotations45=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations45.getTree());


                    break;

            }



            // AST REWRITE
            // elements: typeAnnotations, fieldType, IDENTIFIER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 131:51: -> ^( TYPEDEF fieldType IDENTIFIER ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:131:54: ^( TYPEDEF fieldType IDENTIFIER ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPEDEF, "TYPEDEF"), root_1);

                this.adaptor.addChild(root_1, stream_fieldType.nextTree());
                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:131:85: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    commaOrSemicolon_return: (function() {
        AntlrThriftParser.commaOrSemicolon_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.commaOrSemicolon_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:133:1: commaOrSemicolon : ( ',' | ';' ) ;
    // $ANTLR start "commaOrSemicolon"
    commaOrSemicolon: function() {
        var retval = new AntlrThriftParser.commaOrSemicolon_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set46 = null;

        var set46_tree=null;

        try {
            // ./grammars/AntlrThrift.g:133:17: ( ( ',' | ';' ) )
            // ./grammars/AntlrThrift.g:134:3: ( ',' | ';' )
            root_0 = this.adaptor.nil();

            set46=this.input.LT(1);
            if ( (this.input.LA(1)>=85 && this.input.LA(1)<=86) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(set46));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    enum_return: (function() {
        AntlrThriftParser.enum_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.enum_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:136:1: enum : 'enum' IDENTIFIER '{' ( enumDef )* '}' ( typeAnnotations )? -> ^( ENUM IDENTIFIER ( enumDef )* ( typeAnnotations )? ) ;
    // $ANTLR start "enum"
    enum: function() {
        var retval = new AntlrThriftParser.enum_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal47 = null;
        var IDENTIFIER48 = null;
        var char_literal49 = null;
        var char_literal51 = null;
         var enumDef50 = null;
         var typeAnnotations52 = null;

        var string_literal47_tree=null;
        var IDENTIFIER48_tree=null;
        var char_literal49_tree=null;
        var char_literal51_tree=null;
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_87=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 87");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_enumDef=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule enumDef");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:136:5: ( 'enum' IDENTIFIER '{' ( enumDef )* '}' ( typeAnnotations )? -> ^( ENUM IDENTIFIER ( enumDef )* ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:137:3: 'enum' IDENTIFIER '{' ( enumDef )* '}' ( typeAnnotations )?
            string_literal47=this.match(this.input,87,AntlrThriftParser.FOLLOW_87_in_enum943);  
            stream_87.add(string_literal47);

            IDENTIFIER48=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_enum945);  
            stream_IDENTIFIER.add(IDENTIFIER48);

            char_literal49=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_enum947);  
            stream_88.add(char_literal49);

            // ./grammars/AntlrThrift.g:137:25: ( enumDef )*
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( (LA7_0==IDENTIFIER) ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // ./grammars/AntlrThrift.g:137:25: enumDef
                    this.pushFollow(AntlrThriftParser.FOLLOW_enumDef_in_enum949);
                    enumDef50=this.enumDef();

                    this.state._fsp--;

                    stream_enumDef.add(enumDef50.getTree());


                    break;

                default :
                    break loop7;
                }
            } while (true);

            char_literal51=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_enum952);  
            stream_89.add(char_literal51);

            // ./grammars/AntlrThrift.g:137:38: ( typeAnnotations )?
            var alt8=2;
            var LA8_0 = this.input.LA(1);

            if ( (LA8_0==105) ) {
                alt8=1;
            }
            switch (alt8) {
                case 1 :
                    // ./grammars/AntlrThrift.g:137:38: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_enum954);
                    typeAnnotations52=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations52.getTree());


                    break;

            }



            // AST REWRITE
            // elements: IDENTIFIER, typeAnnotations, enumDef
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 137:55: -> ^( ENUM IDENTIFIER ( enumDef )* ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:137:58: ^( ENUM IDENTIFIER ( enumDef )* ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ENUM, "ENUM"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:137:76: ( enumDef )*
                while ( stream_enumDef.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_enumDef.nextTree());

                }
                stream_enumDef.reset();
                // ./grammars/AntlrThrift.g:137:85: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    enumDef_return: (function() {
        AntlrThriftParser.enumDef_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.enumDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:139:1: enumDef : ( IDENTIFIER '=' intConstant ( typeAnnotations )? ( commaOrSemicolon )? -> ^( ENUM_DEF IDENTIFIER intConstant ( typeAnnotations )? ) | IDENTIFIER ( typeAnnotations )? ( commaOrSemicolon )? -> ^( ENUM_DEF IDENTIFIER ( typeAnnotations )? ) );
    // $ANTLR start "enumDef"
    enumDef: function() {
        var retval = new AntlrThriftParser.enumDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER53 = null;
        var char_literal54 = null;
        var IDENTIFIER58 = null;
         var intConstant55 = null;
         var typeAnnotations56 = null;
         var commaOrSemicolon57 = null;
         var typeAnnotations59 = null;
         var commaOrSemicolon60 = null;

        var IDENTIFIER53_tree=null;
        var char_literal54_tree=null;
        var IDENTIFIER58_tree=null;
        var stream_90=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 90");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_intConstant=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule intConstant");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:139:8: ( IDENTIFIER '=' intConstant ( typeAnnotations )? ( commaOrSemicolon )? -> ^( ENUM_DEF IDENTIFIER intConstant ( typeAnnotations )? ) | IDENTIFIER ( typeAnnotations )? ( commaOrSemicolon )? -> ^( ENUM_DEF IDENTIFIER ( typeAnnotations )? ) )
            var alt13=2;
            var LA13_0 = this.input.LA(1);

            if ( (LA13_0==IDENTIFIER) ) {
                var LA13_1 = this.input.LA(2);

                if ( (LA13_1==90) ) {
                    alt13=1;
                }
                else if ( (LA13_1==IDENTIFIER||(LA13_1>=85 && LA13_1<=86)||LA13_1==89||LA13_1==105) ) {
                    alt13=2;
                }
                else {
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 13, 1, this.input);

                    throw nvae;
                }
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 13, 0, this.input);

                throw nvae;
            }
            switch (alt13) {
                case 1 :
                    // ./grammars/AntlrThrift.g:140:3: IDENTIFIER '=' intConstant ( typeAnnotations )? ( commaOrSemicolon )?
                    IDENTIFIER53=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_enumDef978);  
                    stream_IDENTIFIER.add(IDENTIFIER53);

                    char_literal54=this.match(this.input,90,AntlrThriftParser.FOLLOW_90_in_enumDef980);  
                    stream_90.add(char_literal54);

                    this.pushFollow(AntlrThriftParser.FOLLOW_intConstant_in_enumDef982);
                    intConstant55=this.intConstant();

                    this.state._fsp--;

                    stream_intConstant.add(intConstant55.getTree());
                    // ./grammars/AntlrThrift.g:140:30: ( typeAnnotations )?
                    var alt9=2;
                    var LA9_0 = this.input.LA(1);

                    if ( (LA9_0==105) ) {
                        alt9=1;
                    }
                    switch (alt9) {
                        case 1 :
                            // ./grammars/AntlrThrift.g:140:30: typeAnnotations
                            this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_enumDef984);
                            typeAnnotations56=this.typeAnnotations();

                            this.state._fsp--;

                            stream_typeAnnotations.add(typeAnnotations56.getTree());


                            break;

                    }

                    // ./grammars/AntlrThrift.g:140:47: ( commaOrSemicolon )?
                    var alt10=2;
                    var LA10_0 = this.input.LA(1);

                    if ( ((LA10_0>=85 && LA10_0<=86)) ) {
                        alt10=1;
                    }
                    switch (alt10) {
                        case 1 :
                            // ./grammars/AntlrThrift.g:140:47: commaOrSemicolon
                            this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_enumDef987);
                            commaOrSemicolon57=this.commaOrSemicolon();

                            this.state._fsp--;

                            stream_commaOrSemicolon.add(commaOrSemicolon57.getTree());


                            break;

                    }



                    // AST REWRITE
                    // elements: intConstant, IDENTIFIER, typeAnnotations
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 140:65: -> ^( ENUM_DEF IDENTIFIER intConstant ( typeAnnotations )? )
                    {
                        // ./grammars/AntlrThrift.g:140:68: ^( ENUM_DEF IDENTIFIER intConstant ( typeAnnotations )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ENUM_DEF, "ENUM_DEF"), root_1);

                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                        this.adaptor.addChild(root_1, stream_intConstant.nextTree());
                        // ./grammars/AntlrThrift.g:140:102: ( typeAnnotations )?
                        if ( stream_typeAnnotations.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                        }
                        stream_typeAnnotations.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:141:3: IDENTIFIER ( typeAnnotations )? ( commaOrSemicolon )?
                    IDENTIFIER58=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_enumDef1007);  
                    stream_IDENTIFIER.add(IDENTIFIER58);

                    // ./grammars/AntlrThrift.g:141:14: ( typeAnnotations )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0==105) ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // ./grammars/AntlrThrift.g:141:14: typeAnnotations
                            this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_enumDef1009);
                            typeAnnotations59=this.typeAnnotations();

                            this.state._fsp--;

                            stream_typeAnnotations.add(typeAnnotations59.getTree());


                            break;

                    }

                    // ./grammars/AntlrThrift.g:141:31: ( commaOrSemicolon )?
                    var alt12=2;
                    var LA12_0 = this.input.LA(1);

                    if ( ((LA12_0>=85 && LA12_0<=86)) ) {
                        alt12=1;
                    }
                    switch (alt12) {
                        case 1 :
                            // ./grammars/AntlrThrift.g:141:31: commaOrSemicolon
                            this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_enumDef1012);
                            commaOrSemicolon60=this.commaOrSemicolon();

                            this.state._fsp--;

                            stream_commaOrSemicolon.add(commaOrSemicolon60.getTree());


                            break;

                    }



                    // AST REWRITE
                    // elements: IDENTIFIER, typeAnnotations
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 141:65: -> ^( ENUM_DEF IDENTIFIER ( typeAnnotations )? )
                    {
                        // ./grammars/AntlrThrift.g:141:68: ^( ENUM_DEF IDENTIFIER ( typeAnnotations )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(ENUM_DEF, "ENUM_DEF"), root_1);

                        this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                        // ./grammars/AntlrThrift.g:141:90: ( typeAnnotations )?
                        if ( stream_typeAnnotations.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                        }
                        stream_typeAnnotations.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    senum_return: (function() {
        AntlrThriftParser.senum_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.senum_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:143:1: senum : 'senum' IDENTIFIER '{' ( senumDef )* '}' ( typeAnnotations )? ->;
    // $ANTLR start "senum"
    senum: function() {
        var retval = new AntlrThriftParser.senum_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal61 = null;
        var IDENTIFIER62 = null;
        var char_literal63 = null;
        var char_literal65 = null;
         var senumDef64 = null;
         var typeAnnotations66 = null;

        var string_literal61_tree=null;
        var IDENTIFIER62_tree=null;
        var char_literal63_tree=null;
        var char_literal65_tree=null;
        var stream_91=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 91");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_senumDef=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule senumDef");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:143:6: ( 'senum' IDENTIFIER '{' ( senumDef )* '}' ( typeAnnotations )? ->)
            // ./grammars/AntlrThrift.g:144:3: 'senum' IDENTIFIER '{' ( senumDef )* '}' ( typeAnnotations )?
            string_literal61=this.match(this.input,91,AntlrThriftParser.FOLLOW_91_in_senum1049);  
            stream_91.add(string_literal61);

            IDENTIFIER62=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_senum1051);  
            stream_IDENTIFIER.add(IDENTIFIER62);

            char_literal63=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_senum1053);  
            stream_88.add(char_literal63);

            // ./grammars/AntlrThrift.g:144:26: ( senumDef )*
            loop14:
            do {
                var alt14=2;
                var LA14_0 = this.input.LA(1);

                if ( (LA14_0==LITERAL) ) {
                    alt14=1;
                }


                switch (alt14) {
                case 1 :
                    // ./grammars/AntlrThrift.g:144:26: senumDef
                    this.pushFollow(AntlrThriftParser.FOLLOW_senumDef_in_senum1055);
                    senumDef64=this.senumDef();

                    this.state._fsp--;

                    stream_senumDef.add(senumDef64.getTree());


                    break;

                default :
                    break loop14;
                }
            } while (true);

            char_literal65=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_senum1058);  
            stream_89.add(char_literal65);

            // ./grammars/AntlrThrift.g:144:40: ( typeAnnotations )?
            var alt15=2;
            var LA15_0 = this.input.LA(1);

            if ( (LA15_0==105) ) {
                alt15=1;
            }
            switch (alt15) {
                case 1 :
                    // ./grammars/AntlrThrift.g:144:40: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_senum1060);
                    typeAnnotations66=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations66.getTree());


                    break;

            }



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 144:57: ->
            {
                root_0 = null;
            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    senumDef_return: (function() {
        AntlrThriftParser.senumDef_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.senumDef_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:146:1: senumDef : LITERAL ( commaOrSemicolon )? ;
    // $ANTLR start "senumDef"
    senumDef: function() {
        var retval = new AntlrThriftParser.senumDef_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LITERAL67 = null;
         var commaOrSemicolon68 = null;

        var LITERAL67_tree=null;

        try {
            // ./grammars/AntlrThrift.g:146:9: ( LITERAL ( commaOrSemicolon )? )
            // ./grammars/AntlrThrift.g:147:3: LITERAL ( commaOrSemicolon )?
            root_0 = this.adaptor.nil();

            LITERAL67=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_senumDef1073); 
            LITERAL67_tree = this.adaptor.create(LITERAL67);
            this.adaptor.addChild(root_0, LITERAL67_tree);

            // ./grammars/AntlrThrift.g:147:11: ( commaOrSemicolon )?
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( ((LA16_0>=85 && LA16_0<=86)) ) {
                alt16=1;
            }
            switch (alt16) {
                case 1 :
                    // ./grammars/AntlrThrift.g:147:11: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_senumDef1075);
                    commaOrSemicolon68=this.commaOrSemicolon();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, commaOrSemicolon68.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    const_return: (function() {
        AntlrThriftParser.const_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.const_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:149:1: const : 'const' ft= fieldType id= IDENTIFIER '=' cv= constValue ( commaOrSemicolon )? -> ^( CONST $ft $id $cv) ;
    // $ANTLR start "const"
    const: function() {
        var retval = new AntlrThriftParser.const_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var id = null;
        var string_literal69 = null;
        var char_literal70 = null;
         var ft = null;
         var cv = null;
         var commaOrSemicolon71 = null;

        var id_tree=null;
        var string_literal69_tree=null;
        var char_literal70_tree=null;
        var stream_92=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 92");
        var stream_90=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 90");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_constValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule constValue");
        try {
            // ./grammars/AntlrThrift.g:149:6: ( 'const' ft= fieldType id= IDENTIFIER '=' cv= constValue ( commaOrSemicolon )? -> ^( CONST $ft $id $cv) )
            // ./grammars/AntlrThrift.g:150:3: 'const' ft= fieldType id= IDENTIFIER '=' cv= constValue ( commaOrSemicolon )?
            string_literal69=this.match(this.input,92,AntlrThriftParser.FOLLOW_92_in_const1085);  
            stream_92.add(string_literal69);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_const1089);
            ft=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(ft.getTree());
            id=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_const1093);  
            stream_IDENTIFIER.add(id);

            char_literal70=this.match(this.input,90,AntlrThriftParser.FOLLOW_90_in_const1095);  
            stream_90.add(char_literal70);

            this.pushFollow(AntlrThriftParser.FOLLOW_constValue_in_const1099);
            cv=this.constValue();

            this.state._fsp--;

            stream_constValue.add(cv.getTree());
            // ./grammars/AntlrThrift.g:150:56: ( commaOrSemicolon )?
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( ((LA17_0>=85 && LA17_0<=86)) ) {
                alt17=1;
            }
            switch (alt17) {
                case 1 :
                    // ./grammars/AntlrThrift.g:150:56: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_const1101);
                    commaOrSemicolon71=this.commaOrSemicolon();

                    this.state._fsp--;

                    stream_commaOrSemicolon.add(commaOrSemicolon71.getTree());


                    break;

            }



            // AST REWRITE
            // elements: ft, cv, id
            // token labels: id
            // rule labels: retval, ft, cv
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_id=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token id",id);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);
            var stream_ft=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token ft",ft!=null?ft.tree:null);
            var stream_cv=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token cv",cv!=null?cv.tree:null);

            root_0 = this.adaptor.nil();
            // 151:5: -> ^( CONST $ft $id $cv)
            {
                // ./grammars/AntlrThrift.g:151:8: ^( CONST $ft $id $cv)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONST, "CONST"), root_1);

                this.adaptor.addChild(root_1, stream_ft.nextTree());
                this.adaptor.addChild(root_1, stream_id.nextNode());
                this.adaptor.addChild(root_1, stream_cv.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constValue_return: (function() {
        AntlrThriftParser.constValue_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.constValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:153:1: constValue : ( intConstant | DUBCONSTANT | LITERAL | IDENTIFIER | constList | constMap );
    // $ANTLR start "constValue"
    constValue: function() {
        var retval = new AntlrThriftParser.constValue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var DUBCONSTANT73 = null;
        var LITERAL74 = null;
        var IDENTIFIER75 = null;
         var intConstant72 = null;
         var constList76 = null;
         var constMap77 = null;

        var DUBCONSTANT73_tree=null;
        var LITERAL74_tree=null;
        var IDENTIFIER75_tree=null;

        try {
            // ./grammars/AntlrThrift.g:153:11: ( intConstant | DUBCONSTANT | LITERAL | IDENTIFIER | constList | constMap )
            var alt18=6;
            switch ( this.input.LA(1) ) {
            case INTCONSTANT:
            case HEXCONSTANT:
                alt18=1;
                break;
            case DUBCONSTANT:
                alt18=2;
                break;
            case LITERAL:
                alt18=3;
                break;
            case IDENTIFIER:
                alt18=4;
                break;
            case 93:
                alt18=5;
                break;
            case 88:
                alt18=6;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }

            switch (alt18) {
                case 1 :
                    // ./grammars/AntlrThrift.g:154:3: intConstant
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_intConstant_in_constValue1130);
                    intConstant72=this.intConstant();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, intConstant72.getTree());


                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:155:3: DUBCONSTANT
                    root_0 = this.adaptor.nil();

                    DUBCONSTANT73=this.match(this.input,DUBCONSTANT,AntlrThriftParser.FOLLOW_DUBCONSTANT_in_constValue1136); 
                    DUBCONSTANT73_tree = this.adaptor.create(DUBCONSTANT73);
                    this.adaptor.addChild(root_0, DUBCONSTANT73_tree);



                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:156:3: LITERAL
                    root_0 = this.adaptor.nil();

                    LITERAL74=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_constValue1142); 
                    LITERAL74_tree = this.adaptor.create(LITERAL74);
                    this.adaptor.addChild(root_0, LITERAL74_tree);



                    break;
                case 4 :
                    // ./grammars/AntlrThrift.g:157:3: IDENTIFIER
                    root_0 = this.adaptor.nil();

                    IDENTIFIER75=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_constValue1148); 
                    IDENTIFIER75_tree = this.adaptor.create(IDENTIFIER75);
                    this.adaptor.addChild(root_0, IDENTIFIER75_tree);



                    break;
                case 5 :
                    // ./grammars/AntlrThrift.g:158:3: constList
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_constList_in_constValue1154);
                    constList76=this.constList();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, constList76.getTree());


                    break;
                case 6 :
                    // ./grammars/AntlrThrift.g:159:3: constMap
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_constMap_in_constValue1160);
                    constMap77=this.constMap();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, constMap77.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constList_return: (function() {
        AntlrThriftParser.constList_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.constList_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:161:1: constList : '[' ( constValue ( commaOrSemicolon )? )* ']' -> ^( CONST_LIST ( constValue )* ) ;
    // $ANTLR start "constList"
    constList: function() {
        var retval = new AntlrThriftParser.constList_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal78 = null;
        var char_literal81 = null;
         var constValue79 = null;
         var commaOrSemicolon80 = null;

        var char_literal78_tree=null;
        var char_literal81_tree=null;
        var stream_94=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 94");
        var stream_93=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 93");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_constValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule constValue");
        try {
            // ./grammars/AntlrThrift.g:161:10: ( '[' ( constValue ( commaOrSemicolon )? )* ']' -> ^( CONST_LIST ( constValue )* ) )
            // ./grammars/AntlrThrift.g:162:3: '[' ( constValue ( commaOrSemicolon )? )* ']'
            char_literal78=this.match(this.input,93,AntlrThriftParser.FOLLOW_93_in_constList1169);  
            stream_93.add(char_literal78);

            // ./grammars/AntlrThrift.g:162:7: ( constValue ( commaOrSemicolon )? )*
            loop20:
            do {
                var alt20=2;
                var LA20_0 = this.input.LA(1);

                if ( ((LA20_0>=LITERAL && LA20_0<=IDENTIFIER)||(LA20_0>=DUBCONSTANT && LA20_0<=HEXCONSTANT)||LA20_0==88||LA20_0==93) ) {
                    alt20=1;
                }


                switch (alt20) {
                case 1 :
                    // ./grammars/AntlrThrift.g:162:8: constValue ( commaOrSemicolon )?
                    this.pushFollow(AntlrThriftParser.FOLLOW_constValue_in_constList1172);
                    constValue79=this.constValue();

                    this.state._fsp--;

                    stream_constValue.add(constValue79.getTree());
                    // ./grammars/AntlrThrift.g:162:19: ( commaOrSemicolon )?
                    var alt19=2;
                    var LA19_0 = this.input.LA(1);

                    if ( ((LA19_0>=85 && LA19_0<=86)) ) {
                        alt19=1;
                    }
                    switch (alt19) {
                        case 1 :
                            // ./grammars/AntlrThrift.g:162:19: commaOrSemicolon
                            this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_constList1174);
                            commaOrSemicolon80=this.commaOrSemicolon();

                            this.state._fsp--;

                            stream_commaOrSemicolon.add(commaOrSemicolon80.getTree());


                            break;

                    }



                    break;

                default :
                    break loop20;
                }
            } while (true);

            char_literal81=this.match(this.input,94,AntlrThriftParser.FOLLOW_94_in_constList1179);  
            stream_94.add(char_literal81);



            // AST REWRITE
            // elements: constValue
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 162:43: -> ^( CONST_LIST ( constValue )* )
            {
                // ./grammars/AntlrThrift.g:162:46: ^( CONST_LIST ( constValue )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONST_LIST, "CONST_LIST"), root_1);

                // ./grammars/AntlrThrift.g:162:59: ( constValue )*
                while ( stream_constValue.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_constValue.nextTree());

                }
                stream_constValue.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constMap_return: (function() {
        AntlrThriftParser.constMap_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.constMap_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:164:1: constMap : '{' ( constValuePair )* '}' -> ^( CONST_MAP ( constValuePair )* ) ;
    // $ANTLR start "constMap"
    constMap: function() {
        var retval = new AntlrThriftParser.constMap_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal82 = null;
        var char_literal84 = null;
         var constValuePair83 = null;

        var char_literal82_tree=null;
        var char_literal84_tree=null;
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_constValuePair=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule constValuePair");
        try {
            // ./grammars/AntlrThrift.g:164:9: ( '{' ( constValuePair )* '}' -> ^( CONST_MAP ( constValuePair )* ) )
            // ./grammars/AntlrThrift.g:165:3: '{' ( constValuePair )* '}'
            char_literal82=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_constMap1197);  
            stream_88.add(char_literal82);

            // ./grammars/AntlrThrift.g:165:7: ( constValuePair )*
            loop21:
            do {
                var alt21=2;
                var LA21_0 = this.input.LA(1);

                if ( ((LA21_0>=LITERAL && LA21_0<=IDENTIFIER)||(LA21_0>=DUBCONSTANT && LA21_0<=HEXCONSTANT)||LA21_0==88||LA21_0==93) ) {
                    alt21=1;
                }


                switch (alt21) {
                case 1 :
                    // ./grammars/AntlrThrift.g:165:8: constValuePair
                    this.pushFollow(AntlrThriftParser.FOLLOW_constValuePair_in_constMap1200);
                    constValuePair83=this.constValuePair();

                    this.state._fsp--;

                    stream_constValuePair.add(constValuePair83.getTree());


                    break;

                default :
                    break loop21;
                }
            } while (true);

            char_literal84=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_constMap1204);  
            stream_89.add(char_literal84);



            // AST REWRITE
            // elements: constValuePair
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 165:29: -> ^( CONST_MAP ( constValuePair )* )
            {
                // ./grammars/AntlrThrift.g:165:32: ^( CONST_MAP ( constValuePair )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CONST_MAP, "CONST_MAP"), root_1);

                // ./grammars/AntlrThrift.g:165:44: ( constValuePair )*
                while ( stream_constValuePair.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_constValuePair.nextTree());

                }
                stream_constValuePair.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    constValuePair_return: (function() {
        AntlrThriftParser.constValuePair_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.constValuePair_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:167:1: constValuePair : k= constValue ':' v= constValue ( commaOrSemicolon )? -> ^( PAIR $k $v) ;
    // $ANTLR start "constValuePair"
    constValuePair: function() {
        var retval = new AntlrThriftParser.constValuePair_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal85 = null;
         var k = null;
         var v = null;
         var commaOrSemicolon86 = null;

        var char_literal85_tree=null;
        var stream_95=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 95");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_constValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule constValue");
        try {
            // ./grammars/AntlrThrift.g:167:15: (k= constValue ':' v= constValue ( commaOrSemicolon )? -> ^( PAIR $k $v) )
            // ./grammars/AntlrThrift.g:168:3: k= constValue ':' v= constValue ( commaOrSemicolon )?
            this.pushFollow(AntlrThriftParser.FOLLOW_constValue_in_constValuePair1224);
            k=this.constValue();

            this.state._fsp--;

            stream_constValue.add(k.getTree());
            char_literal85=this.match(this.input,95,AntlrThriftParser.FOLLOW_95_in_constValuePair1226);  
            stream_95.add(char_literal85);

            this.pushFollow(AntlrThriftParser.FOLLOW_constValue_in_constValuePair1230);
            v=this.constValue();

            this.state._fsp--;

            stream_constValue.add(v.getTree());
            // ./grammars/AntlrThrift.g:168:33: ( commaOrSemicolon )?
            var alt22=2;
            var LA22_0 = this.input.LA(1);

            if ( ((LA22_0>=85 && LA22_0<=86)) ) {
                alt22=1;
            }
            switch (alt22) {
                case 1 :
                    // ./grammars/AntlrThrift.g:168:33: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_constValuePair1232);
                    commaOrSemicolon86=this.commaOrSemicolon();

                    this.state._fsp--;

                    stream_commaOrSemicolon.add(commaOrSemicolon86.getTree());


                    break;

            }



            // AST REWRITE
            // elements: v, k
            // token labels: 
            // rule labels: v, retval, k
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_v=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token v",v!=null?v.tree:null);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);
            var stream_k=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token k",k!=null?k.tree:null);

            root_0 = this.adaptor.nil();
            // 168:51: -> ^( PAIR $k $v)
            {
                // ./grammars/AntlrThrift.g:168:54: ^( PAIR $k $v)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(PAIR, "PAIR"), root_1);

                this.adaptor.addChild(root_1, stream_k.nextTree());
                this.adaptor.addChild(root_1, stream_v.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    struct_return: (function() {
        AntlrThriftParser.struct_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.struct_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:170:1: struct : 'struct' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )? -> ^( STRUCT IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? ) ;
    // $ANTLR start "struct"
    struct: function() {
        var retval = new AntlrThriftParser.struct_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal87 = null;
        var IDENTIFIER88 = null;
        var char_literal90 = null;
        var char_literal92 = null;
         var xsdAll89 = null;
         var field91 = null;
         var typeAnnotations93 = null;

        var string_literal87_tree=null;
        var IDENTIFIER88_tree=null;
        var char_literal90_tree=null;
        var char_literal92_tree=null;
        var stream_96=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 96");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        var stream_xsdAll=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule xsdAll");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:170:7: ( 'struct' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )? -> ^( STRUCT IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:171:3: 'struct' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )?
            string_literal87=this.match(this.input,96,AntlrThriftParser.FOLLOW_96_in_struct1254);  
            stream_96.add(string_literal87);

            IDENTIFIER88=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_struct1256);  
            stream_IDENTIFIER.add(IDENTIFIER88);

            // ./grammars/AntlrThrift.g:171:23: ( xsdAll )?
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0==98) ) {
                alt23=1;
            }
            switch (alt23) {
                case 1 :
                    // ./grammars/AntlrThrift.g:171:23: xsdAll
                    this.pushFollow(AntlrThriftParser.FOLLOW_xsdAll_in_struct1258);
                    xsdAll89=this.xsdAll();

                    this.state._fsp--;

                    stream_xsdAll.add(xsdAll89.getTree());


                    break;

            }

            char_literal90=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_struct1261);  
            stream_88.add(char_literal90);

            // ./grammars/AntlrThrift.g:171:35: ( field )*
            loop24:
            do {
                var alt24=2;
                var LA24_0 = this.input.LA(1);

                if ( (LA24_0==IDENTIFIER||(LA24_0>=INTCONSTANT && LA24_0<=HEXCONSTANT)||(LA24_0>=109 && LA24_0<=110)||(LA24_0>=112 && LA24_0<=121)||(LA24_0>=124 && LA24_0<=125)) ) {
                    alt24=1;
                }


                switch (alt24) {
                case 1 :
                    // ./grammars/AntlrThrift.g:171:35: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_struct1263);
                    field91=this.field();

                    this.state._fsp--;

                    stream_field.add(field91.getTree());


                    break;

                default :
                    break loop24;
                }
            } while (true);

            char_literal92=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_struct1266);  
            stream_89.add(char_literal92);

            // ./grammars/AntlrThrift.g:171:46: ( typeAnnotations )?
            var alt25=2;
            var LA25_0 = this.input.LA(1);

            if ( (LA25_0==105) ) {
                alt25=1;
            }
            switch (alt25) {
                case 1 :
                    // ./grammars/AntlrThrift.g:171:46: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_struct1268);
                    typeAnnotations93=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations93.getTree());


                    break;

            }



            // AST REWRITE
            // elements: xsdAll, IDENTIFIER, typeAnnotations, field
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 172:5: -> ^( STRUCT IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:172:8: ^( STRUCT IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STRUCT, "STRUCT"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:172:28: ( xsdAll )?
                if ( stream_xsdAll.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_xsdAll.nextTree());

                }
                stream_xsdAll.reset();
                // ./grammars/AntlrThrift.g:172:36: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();
                // ./grammars/AntlrThrift.g:172:43: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    union_return: (function() {
        AntlrThriftParser.union_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.union_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:174:1: union : 'union' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )? -> ^( UNION IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? ) ;
    // $ANTLR start "union"
    union: function() {
        var retval = new AntlrThriftParser.union_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal94 = null;
        var IDENTIFIER95 = null;
        var char_literal97 = null;
        var char_literal99 = null;
         var xsdAll96 = null;
         var field98 = null;
         var typeAnnotations100 = null;

        var string_literal94_tree=null;
        var IDENTIFIER95_tree=null;
        var char_literal97_tree=null;
        var char_literal99_tree=null;
        var stream_97=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 97");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        var stream_xsdAll=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule xsdAll");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:174:6: ( 'union' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )? -> ^( UNION IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:175:3: 'union' IDENTIFIER ( xsdAll )? '{' ( field )* '}' ( typeAnnotations )?
            string_literal94=this.match(this.input,97,AntlrThriftParser.FOLLOW_97_in_union1299);  
            stream_97.add(string_literal94);

            IDENTIFIER95=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_union1301);  
            stream_IDENTIFIER.add(IDENTIFIER95);

            // ./grammars/AntlrThrift.g:175:22: ( xsdAll )?
            var alt26=2;
            var LA26_0 = this.input.LA(1);

            if ( (LA26_0==98) ) {
                alt26=1;
            }
            switch (alt26) {
                case 1 :
                    // ./grammars/AntlrThrift.g:175:22: xsdAll
                    this.pushFollow(AntlrThriftParser.FOLLOW_xsdAll_in_union1303);
                    xsdAll96=this.xsdAll();

                    this.state._fsp--;

                    stream_xsdAll.add(xsdAll96.getTree());


                    break;

            }

            char_literal97=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_union1306);  
            stream_88.add(char_literal97);

            // ./grammars/AntlrThrift.g:175:34: ( field )*
            loop27:
            do {
                var alt27=2;
                var LA27_0 = this.input.LA(1);

                if ( (LA27_0==IDENTIFIER||(LA27_0>=INTCONSTANT && LA27_0<=HEXCONSTANT)||(LA27_0>=109 && LA27_0<=110)||(LA27_0>=112 && LA27_0<=121)||(LA27_0>=124 && LA27_0<=125)) ) {
                    alt27=1;
                }


                switch (alt27) {
                case 1 :
                    // ./grammars/AntlrThrift.g:175:34: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_union1308);
                    field98=this.field();

                    this.state._fsp--;

                    stream_field.add(field98.getTree());


                    break;

                default :
                    break loop27;
                }
            } while (true);

            char_literal99=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_union1311);  
            stream_89.add(char_literal99);

            // ./grammars/AntlrThrift.g:175:45: ( typeAnnotations )?
            var alt28=2;
            var LA28_0 = this.input.LA(1);

            if ( (LA28_0==105) ) {
                alt28=1;
            }
            switch (alt28) {
                case 1 :
                    // ./grammars/AntlrThrift.g:175:45: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_union1313);
                    typeAnnotations100=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations100.getTree());


                    break;

            }



            // AST REWRITE
            // elements: xsdAll, field, typeAnnotations, IDENTIFIER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 176:5: -> ^( UNION IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:176:8: ^( UNION IDENTIFIER ( xsdAll )? ( field )* ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(UNION, "UNION"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:176:27: ( xsdAll )?
                if ( stream_xsdAll.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_xsdAll.nextTree());

                }
                stream_xsdAll.reset();
                // ./grammars/AntlrThrift.g:176:35: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();
                // ./grammars/AntlrThrift.g:176:42: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    xsdAll_return: (function() {
        AntlrThriftParser.xsdAll_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.xsdAll_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:178:1: xsdAll : 'xsd_all' -> XSD_ALL ;
    // $ANTLR start "xsdAll"
    xsdAll: function() {
        var retval = new AntlrThriftParser.xsdAll_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal101 = null;

        var string_literal101_tree=null;
        var stream_98=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 98");

        try {
            // ./grammars/AntlrThrift.g:178:7: ( 'xsd_all' -> XSD_ALL )
            // ./grammars/AntlrThrift.g:179:3: 'xsd_all'
            string_literal101=this.match(this.input,98,AntlrThriftParser.FOLLOW_98_in_xsdAll1344);  
            stream_98.add(string_literal101);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 179:13: -> XSD_ALL
            {
                this.adaptor.addChild(root_0, this.adaptor.create(XSD_ALL, "XSD_ALL"));

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    xsdOptional_return: (function() {
        AntlrThriftParser.xsdOptional_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.xsdOptional_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:181:1: xsdOptional : 'xsd_optional' -> XSD_OPTIONAL ;
    // $ANTLR start "xsdOptional"
    xsdOptional: function() {
        var retval = new AntlrThriftParser.xsdOptional_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal102 = null;

        var string_literal102_tree=null;
        var stream_99=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 99");

        try {
            // ./grammars/AntlrThrift.g:181:12: ( 'xsd_optional' -> XSD_OPTIONAL )
            // ./grammars/AntlrThrift.g:182:3: 'xsd_optional'
            string_literal102=this.match(this.input,99,AntlrThriftParser.FOLLOW_99_in_xsdOptional1357);  
            stream_99.add(string_literal102);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 182:18: -> XSD_OPTIONAL
            {
                this.adaptor.addChild(root_0, this.adaptor.create(XSD_OPTIONAL, "XSD_OPTIONAL"));

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    xsdNillable_return: (function() {
        AntlrThriftParser.xsdNillable_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.xsdNillable_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:184:1: xsdNillable : 'xsd_nillable' -> XSD_NILLABLE ;
    // $ANTLR start "xsdNillable"
    xsdNillable: function() {
        var retval = new AntlrThriftParser.xsdNillable_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal103 = null;

        var string_literal103_tree=null;
        var stream_100=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 100");

        try {
            // ./grammars/AntlrThrift.g:184:12: ( 'xsd_nillable' -> XSD_NILLABLE )
            // ./grammars/AntlrThrift.g:185:3: 'xsd_nillable'
            string_literal103=this.match(this.input,100,AntlrThriftParser.FOLLOW_100_in_xsdNillable1370);  
            stream_100.add(string_literal103);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 185:18: -> XSD_NILLABLE
            {
                this.adaptor.addChild(root_0, this.adaptor.create(XSD_NILLABLE, "XSD_NILLABLE"));

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    xsdAttributes_return: (function() {
        AntlrThriftParser.xsdAttributes_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.xsdAttributes_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:187:1: xsdAttributes : 'xsd_attributes' '{' ( field )* '}' -> ^( XSD_ATTRIBUTES ( field )* ) ;
    // $ANTLR start "xsdAttributes"
    xsdAttributes: function() {
        var retval = new AntlrThriftParser.xsdAttributes_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal104 = null;
        var char_literal105 = null;
        var char_literal107 = null;
         var field106 = null;

        var string_literal104_tree=null;
        var char_literal105_tree=null;
        var char_literal107_tree=null;
        var stream_101=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 101");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        try {
            // ./grammars/AntlrThrift.g:187:14: ( 'xsd_attributes' '{' ( field )* '}' -> ^( XSD_ATTRIBUTES ( field )* ) )
            // ./grammars/AntlrThrift.g:188:3: 'xsd_attributes' '{' ( field )* '}'
            string_literal104=this.match(this.input,101,AntlrThriftParser.FOLLOW_101_in_xsdAttributes1383);  
            stream_101.add(string_literal104);

            char_literal105=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_xsdAttributes1385);  
            stream_88.add(char_literal105);

            // ./grammars/AntlrThrift.g:188:24: ( field )*
            loop29:
            do {
                var alt29=2;
                var LA29_0 = this.input.LA(1);

                if ( (LA29_0==IDENTIFIER||(LA29_0>=INTCONSTANT && LA29_0<=HEXCONSTANT)||(LA29_0>=109 && LA29_0<=110)||(LA29_0>=112 && LA29_0<=121)||(LA29_0>=124 && LA29_0<=125)) ) {
                    alt29=1;
                }


                switch (alt29) {
                case 1 :
                    // ./grammars/AntlrThrift.g:188:24: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_xsdAttributes1387);
                    field106=this.field();

                    this.state._fsp--;

                    stream_field.add(field106.getTree());


                    break;

                default :
                    break loop29;
                }
            } while (true);

            char_literal107=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_xsdAttributes1390);  
            stream_89.add(char_literal107);



            // AST REWRITE
            // elements: field
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 188:35: -> ^( XSD_ATTRIBUTES ( field )* )
            {
                // ./grammars/AntlrThrift.g:188:38: ^( XSD_ATTRIBUTES ( field )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(XSD_ATTRIBUTES, "XSD_ATTRIBUTES"), root_1);

                // ./grammars/AntlrThrift.g:188:55: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    xception_return: (function() {
        AntlrThriftParser.xception_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.xception_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:190:1: xception : 'exception' IDENTIFIER '{' ( field )* '}' ( typeAnnotations )? -> ^( EXCEPTION IDENTIFIER ( field )* ( typeAnnotations )? ) ;
    // $ANTLR start "xception"
    xception: function() {
        var retval = new AntlrThriftParser.xception_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal108 = null;
        var IDENTIFIER109 = null;
        var char_literal110 = null;
        var char_literal112 = null;
         var field111 = null;
         var typeAnnotations113 = null;

        var string_literal108_tree=null;
        var IDENTIFIER109_tree=null;
        var char_literal110_tree=null;
        var char_literal112_tree=null;
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_102=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 102");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:190:9: ( 'exception' IDENTIFIER '{' ( field )* '}' ( typeAnnotations )? -> ^( EXCEPTION IDENTIFIER ( field )* ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:191:3: 'exception' IDENTIFIER '{' ( field )* '}' ( typeAnnotations )?
            string_literal108=this.match(this.input,102,AntlrThriftParser.FOLLOW_102_in_xception1408);  
            stream_102.add(string_literal108);

            IDENTIFIER109=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_xception1410);  
            stream_IDENTIFIER.add(IDENTIFIER109);

            char_literal110=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_xception1412);  
            stream_88.add(char_literal110);

            // ./grammars/AntlrThrift.g:191:30: ( field )*
            loop30:
            do {
                var alt30=2;
                var LA30_0 = this.input.LA(1);

                if ( (LA30_0==IDENTIFIER||(LA30_0>=INTCONSTANT && LA30_0<=HEXCONSTANT)||(LA30_0>=109 && LA30_0<=110)||(LA30_0>=112 && LA30_0<=121)||(LA30_0>=124 && LA30_0<=125)) ) {
                    alt30=1;
                }


                switch (alt30) {
                case 1 :
                    // ./grammars/AntlrThrift.g:191:30: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_xception1414);
                    field111=this.field();

                    this.state._fsp--;

                    stream_field.add(field111.getTree());


                    break;

                default :
                    break loop30;
                }
            } while (true);

            char_literal112=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_xception1417);  
            stream_89.add(char_literal112);

            // ./grammars/AntlrThrift.g:191:41: ( typeAnnotations )?
            var alt31=2;
            var LA31_0 = this.input.LA(1);

            if ( (LA31_0==105) ) {
                alt31=1;
            }
            switch (alt31) {
                case 1 :
                    // ./grammars/AntlrThrift.g:191:41: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_xception1419);
                    typeAnnotations113=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations113.getTree());


                    break;

            }



            // AST REWRITE
            // elements: typeAnnotations, IDENTIFIER, field
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 191:58: -> ^( EXCEPTION IDENTIFIER ( field )* ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:191:61: ^( EXCEPTION IDENTIFIER ( field )* ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(EXCEPTION, "EXCEPTION"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:191:84: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();
                // ./grammars/AntlrThrift.g:191:91: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    service_return: (function() {
        AntlrThriftParser.service_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.service_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:193:1: service : 'service' name= IDENTIFIER ( extends )? '{' ( function )* '}' ( typeAnnotations )? -> ^( SERVICE IDENTIFIER ( extends )? ( function )* ( typeAnnotations )? ) ;
    // $ANTLR start "service"
    service: function() {
        var retval = new AntlrThriftParser.service_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name = null;
        var string_literal114 = null;
        var char_literal116 = null;
        var char_literal118 = null;
         var extends115 = null;
         var function117 = null;
         var typeAnnotations119 = null;

        var name_tree=null;
        var string_literal114_tree=null;
        var char_literal116_tree=null;
        var char_literal118_tree=null;
        var stream_103=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 103");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_88=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 88");
        var stream_89=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 89");
        var stream_extends=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule extends");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        var stream_function=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule function");
        try {
            // ./grammars/AntlrThrift.g:193:9: ( 'service' name= IDENTIFIER ( extends )? '{' ( function )* '}' ( typeAnnotations )? -> ^( SERVICE IDENTIFIER ( extends )? ( function )* ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:194:3: 'service' name= IDENTIFIER ( extends )? '{' ( function )* '}' ( typeAnnotations )?
            string_literal114=this.match(this.input,103,AntlrThriftParser.FOLLOW_103_in_service1444);  
            stream_103.add(string_literal114);

            name=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_service1448);  
            stream_IDENTIFIER.add(name);


              	this.serviceName = name.getText();
              	this.services = this.services || {};
              	this.services[this.serviceName] = {};
              
            // ./grammars/AntlrThrift.g:198:5: ( extends )?
            var alt32=2;
            var LA32_0 = this.input.LA(1);

            if ( (LA32_0==104) ) {
                alt32=1;
            }
            switch (alt32) {
                case 1 :
                    // ./grammars/AntlrThrift.g:198:5: extends
                    this.pushFollow(AntlrThriftParser.FOLLOW_extends_in_service1452);
                    extends115=this.extends();

                    this.state._fsp--;

                    stream_extends.add(extends115.getTree());


                    break;

            }

            char_literal116=this.match(this.input,88,AntlrThriftParser.FOLLOW_88_in_service1455);  
            stream_88.add(char_literal116);

            // ./grammars/AntlrThrift.g:198:18: ( function )*
            loop33:
            do {
                var alt33=2;
                var LA33_0 = this.input.LA(1);

                if ( (LA33_0==IDENTIFIER||LA33_0==107||(LA33_0>=111 && LA33_0<=121)||(LA33_0>=124 && LA33_0<=125)) ) {
                    alt33=1;
                }


                switch (alt33) {
                case 1 :
                    // ./grammars/AntlrThrift.g:198:18: function
                    this.pushFollow(AntlrThriftParser.FOLLOW_function_in_service1457);
                    function117=this.function();

                    this.state._fsp--;

                    stream_function.add(function117.getTree());


                    break;

                default :
                    break loop33;
                }
            } while (true);

            char_literal118=this.match(this.input,89,AntlrThriftParser.FOLLOW_89_in_service1460);  
            stream_89.add(char_literal118);

            // ./grammars/AntlrThrift.g:198:32: ( typeAnnotations )?
            var alt34=2;
            var LA34_0 = this.input.LA(1);

            if ( (LA34_0==105) ) {
                alt34=1;
            }
            switch (alt34) {
                case 1 :
                    // ./grammars/AntlrThrift.g:198:32: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_service1462);
                    typeAnnotations119=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations119.getTree());


                    break;

            }

            this.serviceName = null;


            // AST REWRITE
            // elements: extends, typeAnnotations, IDENTIFIER, function
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 199:30: -> ^( SERVICE IDENTIFIER ( extends )? ( function )* ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:199:33: ^( SERVICE IDENTIFIER ( extends )? ( function )* ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(SERVICE, "SERVICE"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:199:54: ( extends )?
                if ( stream_extends.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_extends.nextTree());

                }
                stream_extends.reset();
                // ./grammars/AntlrThrift.g:199:63: ( function )*
                while ( stream_function.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_function.nextTree());

                }
                stream_function.reset();
                // ./grammars/AntlrThrift.g:199:73: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    extends_return: (function() {
        AntlrThriftParser.extends_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.extends_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:201:1: extends : 'extends' IDENTIFIER -> ^( EXTENDS IDENTIFIER ) ;
    // $ANTLR start "extends"
    extends: function() {
        var retval = new AntlrThriftParser.extends_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal120 = null;
        var IDENTIFIER121 = null;

        var string_literal120_tree=null;
        var IDENTIFIER121_tree=null;
        var stream_104=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 104");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");

        try {
            // ./grammars/AntlrThrift.g:201:8: ( 'extends' IDENTIFIER -> ^( EXTENDS IDENTIFIER ) )
            // ./grammars/AntlrThrift.g:202:3: 'extends' IDENTIFIER
            string_literal120=this.match(this.input,104,AntlrThriftParser.FOLLOW_104_in_extends1494);  
            stream_104.add(string_literal120);

            IDENTIFIER121=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_extends1496);  
            stream_IDENTIFIER.add(IDENTIFIER121);



            // AST REWRITE
            // elements: IDENTIFIER
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 202:24: -> ^( EXTENDS IDENTIFIER )
            {
                // ./grammars/AntlrThrift.g:202:27: ^( EXTENDS IDENTIFIER )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(EXTENDS, "EXTENDS"), root_1);

                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    function_return: (function() {
        AntlrThriftParser.function_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.function_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:204:1: function : ( oneway )? functionType name= IDENTIFIER '(' ( field )* ')' ( throwz )? ( typeAnnotations )? ( commaOrSemicolon )? -> ^( FUNCTION ( oneway )? functionType IDENTIFIER ( field )* ( throwz )? ( typeAnnotations )? ) ;
    // $ANTLR start "function"
    function: function() {
        var retval = new AntlrThriftParser.function_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name = null;
        var char_literal124 = null;
        var char_literal126 = null;
         var oneway122 = null;
         var functionType123 = null;
         var field125 = null;
         var throwz127 = null;
         var typeAnnotations128 = null;
         var commaOrSemicolon129 = null;

        var name_tree=null;
        var char_literal124_tree=null;
        var char_literal126_tree=null;
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_105=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 105");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        var stream_functionType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule functionType");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_oneway=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule oneway");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        var stream_throwz=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule throwz");
        try {
            // ./grammars/AntlrThrift.g:204:9: ( ( oneway )? functionType name= IDENTIFIER '(' ( field )* ')' ( throwz )? ( typeAnnotations )? ( commaOrSemicolon )? -> ^( FUNCTION ( oneway )? functionType IDENTIFIER ( field )* ( throwz )? ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:205:3: ( oneway )? functionType name= IDENTIFIER '(' ( field )* ')' ( throwz )? ( typeAnnotations )? ( commaOrSemicolon )?
            // ./grammars/AntlrThrift.g:205:3: ( oneway )?
            var alt35=2;
            var LA35_0 = this.input.LA(1);

            if ( (LA35_0==107) ) {
                alt35=1;
            }
            switch (alt35) {
                case 1 :
                    // ./grammars/AntlrThrift.g:205:3: oneway
                    this.pushFollow(AntlrThriftParser.FOLLOW_oneway_in_function1513);
                    oneway122=this.oneway();

                    this.state._fsp--;

                    stream_oneway.add(oneway122.getTree());


                    break;

            }

            this.pushFollow(AntlrThriftParser.FOLLOW_functionType_in_function1516);
            functionType123=this.functionType();

            this.state._fsp--;

            stream_functionType.add(functionType123.getTree());
            name=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_function1520);  
            stream_IDENTIFIER.add(name);


              	this.functionName = name.getText();
              	this.services[this.serviceName][this.functionName] = [];
              
            char_literal124=this.match(this.input,105,AntlrThriftParser.FOLLOW_105_in_function1524);  
            stream_105.add(char_literal124);

            // ./grammars/AntlrThrift.g:208:9: ( field )*
            loop36:
            do {
                var alt36=2;
                var LA36_0 = this.input.LA(1);

                if ( (LA36_0==IDENTIFIER||(LA36_0>=INTCONSTANT && LA36_0<=HEXCONSTANT)||(LA36_0>=109 && LA36_0<=110)||(LA36_0>=112 && LA36_0<=121)||(LA36_0>=124 && LA36_0<=125)) ) {
                    alt36=1;
                }


                switch (alt36) {
                case 1 :
                    // ./grammars/AntlrThrift.g:208:9: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_function1526);
                    field125=this.field();

                    this.state._fsp--;

                    stream_field.add(field125.getTree());


                    break;

                default :
                    break loop36;
                }
            } while (true);

            char_literal126=this.match(this.input,106,AntlrThriftParser.FOLLOW_106_in_function1529);  
            stream_106.add(char_literal126);

            // ./grammars/AntlrThrift.g:208:20: ( throwz )?
            var alt37=2;
            var LA37_0 = this.input.LA(1);

            if ( (LA37_0==108) ) {
                alt37=1;
            }
            switch (alt37) {
                case 1 :
                    // ./grammars/AntlrThrift.g:208:20: throwz
                    this.pushFollow(AntlrThriftParser.FOLLOW_throwz_in_function1531);
                    throwz127=this.throwz();

                    this.state._fsp--;

                    stream_throwz.add(throwz127.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:208:28: ( typeAnnotations )?
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==105) ) {
                alt38=1;
            }
            switch (alt38) {
                case 1 :
                    // ./grammars/AntlrThrift.g:208:28: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_function1534);
                    typeAnnotations128=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations128.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:208:45: ( commaOrSemicolon )?
            var alt39=2;
            var LA39_0 = this.input.LA(1);

            if ( ((LA39_0>=85 && LA39_0<=86)) ) {
                alt39=1;
            }
            switch (alt39) {
                case 1 :
                    // ./grammars/AntlrThrift.g:208:45: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_function1537);
                    commaOrSemicolon129=this.commaOrSemicolon();

                    this.state._fsp--;

                    stream_commaOrSemicolon.add(commaOrSemicolon129.getTree());


                    break;

            }

            this.functionName = null;


            // AST REWRITE
            // elements: functionType, typeAnnotations, oneway, throwz, IDENTIFIER, field
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 209:3: -> ^( FUNCTION ( oneway )? functionType IDENTIFIER ( field )* ( throwz )? ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:209:6: ^( FUNCTION ( oneway )? functionType IDENTIFIER ( field )* ( throwz )? ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FUNCTION, "FUNCTION"), root_1);

                // ./grammars/AntlrThrift.g:209:17: ( oneway )?
                if ( stream_oneway.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_oneway.nextTree());

                }
                stream_oneway.reset();
                this.adaptor.addChild(root_1, stream_functionType.nextTree());
                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:209:49: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();
                // ./grammars/AntlrThrift.g:209:56: ( throwz )?
                if ( stream_throwz.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_throwz.nextTree());

                }
                stream_throwz.reset();
                // ./grammars/AntlrThrift.g:209:64: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    oneway_return: (function() {
        AntlrThriftParser.oneway_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.oneway_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:211:1: oneway : 'oneway' -> ONEWAY ;
    // $ANTLR start "oneway"
    oneway: function() {
        var retval = new AntlrThriftParser.oneway_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal130 = null;

        var string_literal130_tree=null;
        var stream_107=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 107");

        try {
            // ./grammars/AntlrThrift.g:211:7: ( 'oneway' -> ONEWAY )
            // ./grammars/AntlrThrift.g:212:3: 'oneway'
            string_literal130=this.match(this.input,107,AntlrThriftParser.FOLLOW_107_in_oneway1573);  
            stream_107.add(string_literal130);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 212:12: -> ONEWAY
            {
                this.adaptor.addChild(root_0, this.adaptor.create(ONEWAY, "ONEWAY"));

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    throwz_return: (function() {
        AntlrThriftParser.throwz_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.throwz_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:214:1: throwz : 'throws' '(' ( field )* ')' -> ^( THROWS ( field )* ) ;
    // $ANTLR start "throwz"
    throwz: function() {
        var retval = new AntlrThriftParser.throwz_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal131 = null;
        var char_literal132 = null;
        var char_literal134 = null;
         var field133 = null;

        var string_literal131_tree=null;
        var char_literal132_tree=null;
        var char_literal134_tree=null;
        var stream_108=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 108");
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_105=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 105");
        var stream_field=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule field");
        try {
            // ./grammars/AntlrThrift.g:214:7: ( 'throws' '(' ( field )* ')' -> ^( THROWS ( field )* ) )
            // ./grammars/AntlrThrift.g:215:3: 'throws' '(' ( field )* ')'
            string_literal131=this.match(this.input,108,AntlrThriftParser.FOLLOW_108_in_throwz1586);  
            stream_108.add(string_literal131);

            char_literal132=this.match(this.input,105,AntlrThriftParser.FOLLOW_105_in_throwz1588);  
            stream_105.add(char_literal132);

            // ./grammars/AntlrThrift.g:215:16: ( field )*
            loop40:
            do {
                var alt40=2;
                var LA40_0 = this.input.LA(1);

                if ( (LA40_0==IDENTIFIER||(LA40_0>=INTCONSTANT && LA40_0<=HEXCONSTANT)||(LA40_0>=109 && LA40_0<=110)||(LA40_0>=112 && LA40_0<=121)||(LA40_0>=124 && LA40_0<=125)) ) {
                    alt40=1;
                }


                switch (alt40) {
                case 1 :
                    // ./grammars/AntlrThrift.g:215:16: field
                    this.pushFollow(AntlrThriftParser.FOLLOW_field_in_throwz1590);
                    field133=this.field();

                    this.state._fsp--;

                    stream_field.add(field133.getTree());


                    break;

                default :
                    break loop40;
                }
            } while (true);

            char_literal134=this.match(this.input,106,AntlrThriftParser.FOLLOW_106_in_throwz1593);  
            stream_106.add(char_literal134);



            // AST REWRITE
            // elements: field
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 215:27: -> ^( THROWS ( field )* )
            {
                // ./grammars/AntlrThrift.g:215:30: ^( THROWS ( field )* )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(THROWS, "THROWS"), root_1);

                // ./grammars/AntlrThrift.g:215:39: ( field )*
                while ( stream_field.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_field.nextTree());

                }
                stream_field.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    field_return: (function() {
        AntlrThriftParser.field_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.field_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:217:1: field : ( fieldIdentifier )? ( fieldRequiredness )? fieldType name= IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? ( commaOrSemicolon )? -> ^( FIELD ( fieldIdentifier )? ( fieldRequiredness )? fieldType IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? ) ;
    // $ANTLR start "field"
    field: function() {
        var retval = new AntlrThriftParser.field_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name = null;
         var fieldIdentifier135 = null;
         var fieldRequiredness136 = null;
         var fieldType137 = null;
         var fieldValue138 = null;
         var xsdOptional139 = null;
         var xsdNillable140 = null;
         var xsdAttributes141 = null;
         var typeAnnotations142 = null;
         var commaOrSemicolon143 = null;

        var name_tree=null;
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_fieldRequiredness=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldRequiredness");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        var stream_xsdAttributes=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule xsdAttributes");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_fieldValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldValue");
        var stream_xsdOptional=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule xsdOptional");
        var stream_xsdNillable=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule xsdNillable");
        var stream_fieldIdentifier=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldIdentifier");
        var stream_typeAnnotations=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotations");
        try {
            // ./grammars/AntlrThrift.g:217:6: ( ( fieldIdentifier )? ( fieldRequiredness )? fieldType name= IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? ( commaOrSemicolon )? -> ^( FIELD ( fieldIdentifier )? ( fieldRequiredness )? fieldType IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? ) )
            // ./grammars/AntlrThrift.g:218:3: ( fieldIdentifier )? ( fieldRequiredness )? fieldType name= IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? ( commaOrSemicolon )?
            // ./grammars/AntlrThrift.g:218:3: ( fieldIdentifier )?
            var alt41=2;
            var LA41_0 = this.input.LA(1);

            if ( ((LA41_0>=INTCONSTANT && LA41_0<=HEXCONSTANT)) ) {
                alt41=1;
            }
            switch (alt41) {
                case 1 :
                    // ./grammars/AntlrThrift.g:218:3: fieldIdentifier
                    this.pushFollow(AntlrThriftParser.FOLLOW_fieldIdentifier_in_field1611);
                    fieldIdentifier135=this.fieldIdentifier();

                    this.state._fsp--;

                    stream_fieldIdentifier.add(fieldIdentifier135.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:218:20: ( fieldRequiredness )?
            var alt42=2;
            var LA42_0 = this.input.LA(1);

            if ( ((LA42_0>=109 && LA42_0<=110)) ) {
                alt42=1;
            }
            switch (alt42) {
                case 1 :
                    // ./grammars/AntlrThrift.g:218:20: fieldRequiredness
                    this.pushFollow(AntlrThriftParser.FOLLOW_fieldRequiredness_in_field1614);
                    fieldRequiredness136=this.fieldRequiredness();

                    this.state._fsp--;

                    stream_fieldRequiredness.add(fieldRequiredness136.getTree());


                    break;

            }

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_field1617);
            fieldType137=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(fieldType137.getTree());
            name=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_field1621);  
            stream_IDENTIFIER.add(name);



              	if (!!this.serviceName) {
              	  this.services[this.serviceName][this.functionName].push(name.getText());
              	}

              
            // ./grammars/AntlrThrift.g:224:4: ( fieldValue )?
            var alt43=2;
            var LA43_0 = this.input.LA(1);

            if ( (LA43_0==90) ) {
                alt43=1;
            }
            switch (alt43) {
                case 1 :
                    // ./grammars/AntlrThrift.g:224:4: fieldValue
                    this.pushFollow(AntlrThriftParser.FOLLOW_fieldValue_in_field1624);
                    fieldValue138=this.fieldValue();

                    this.state._fsp--;

                    stream_fieldValue.add(fieldValue138.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:225:5: ( xsdOptional )?
            var alt44=2;
            var LA44_0 = this.input.LA(1);

            if ( (LA44_0==99) ) {
                alt44=1;
            }
            switch (alt44) {
                case 1 :
                    // ./grammars/AntlrThrift.g:225:5: xsdOptional
                    this.pushFollow(AntlrThriftParser.FOLLOW_xsdOptional_in_field1631);
                    xsdOptional139=this.xsdOptional();

                    this.state._fsp--;

                    stream_xsdOptional.add(xsdOptional139.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:225:18: ( xsdNillable )?
            var alt45=2;
            var LA45_0 = this.input.LA(1);

            if ( (LA45_0==100) ) {
                alt45=1;
            }
            switch (alt45) {
                case 1 :
                    // ./grammars/AntlrThrift.g:225:18: xsdNillable
                    this.pushFollow(AntlrThriftParser.FOLLOW_xsdNillable_in_field1634);
                    xsdNillable140=this.xsdNillable();

                    this.state._fsp--;

                    stream_xsdNillable.add(xsdNillable140.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:225:31: ( xsdAttributes )?
            var alt46=2;
            var LA46_0 = this.input.LA(1);

            if ( (LA46_0==101) ) {
                alt46=1;
            }
            switch (alt46) {
                case 1 :
                    // ./grammars/AntlrThrift.g:225:31: xsdAttributes
                    this.pushFollow(AntlrThriftParser.FOLLOW_xsdAttributes_in_field1637);
                    xsdAttributes141=this.xsdAttributes();

                    this.state._fsp--;

                    stream_xsdAttributes.add(xsdAttributes141.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:225:46: ( typeAnnotations )?
            var alt47=2;
            var LA47_0 = this.input.LA(1);

            if ( (LA47_0==105) ) {
                alt47=1;
            }
            switch (alt47) {
                case 1 :
                    // ./grammars/AntlrThrift.g:225:46: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_field1640);
                    typeAnnotations142=this.typeAnnotations();

                    this.state._fsp--;

                    stream_typeAnnotations.add(typeAnnotations142.getTree());


                    break;

            }

            // ./grammars/AntlrThrift.g:226:5: ( commaOrSemicolon )?
            var alt48=2;
            var LA48_0 = this.input.LA(1);

            if ( ((LA48_0>=85 && LA48_0<=86)) ) {
                alt48=1;
            }
            switch (alt48) {
                case 1 :
                    // ./grammars/AntlrThrift.g:226:5: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_field1647);
                    commaOrSemicolon143=this.commaOrSemicolon();

                    this.state._fsp--;

                    stream_commaOrSemicolon.add(commaOrSemicolon143.getTree());


                    break;

            }



            // AST REWRITE
            // elements: fieldIdentifier, typeAnnotations, IDENTIFIER, xsdNillable, fieldValue, fieldRequiredness, xsdOptional, fieldType, xsdAttributes
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 227:4: -> ^( FIELD ( fieldIdentifier )? ( fieldRequiredness )? fieldType IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? )
            {
                // ./grammars/AntlrThrift.g:227:7: ^( FIELD ( fieldIdentifier )? ( fieldRequiredness )? fieldType IDENTIFIER ( fieldValue )? ( xsdOptional )? ( xsdNillable )? ( xsdAttributes )? ( typeAnnotations )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FIELD, "FIELD"), root_1);

                // ./grammars/AntlrThrift.g:227:15: ( fieldIdentifier )?
                if ( stream_fieldIdentifier.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_fieldIdentifier.nextTree());

                }
                stream_fieldIdentifier.reset();
                // ./grammars/AntlrThrift.g:227:32: ( fieldRequiredness )?
                if ( stream_fieldRequiredness.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_fieldRequiredness.nextTree());

                }
                stream_fieldRequiredness.reset();
                this.adaptor.addChild(root_1, stream_fieldType.nextTree());
                this.adaptor.addChild(root_1, stream_IDENTIFIER.nextNode());
                // ./grammars/AntlrThrift.g:227:72: ( fieldValue )?
                if ( stream_fieldValue.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_fieldValue.nextTree());

                }
                stream_fieldValue.reset();
                // ./grammars/AntlrThrift.g:228:9: ( xsdOptional )?
                if ( stream_xsdOptional.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_xsdOptional.nextTree());

                }
                stream_xsdOptional.reset();
                // ./grammars/AntlrThrift.g:228:22: ( xsdNillable )?
                if ( stream_xsdNillable.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_xsdNillable.nextTree());

                }
                stream_xsdNillable.reset();
                // ./grammars/AntlrThrift.g:228:35: ( xsdAttributes )?
                if ( stream_xsdAttributes.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_xsdAttributes.nextTree());

                }
                stream_xsdAttributes.reset();
                // ./grammars/AntlrThrift.g:228:50: ( typeAnnotations )?
                if ( stream_typeAnnotations.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_typeAnnotations.nextTree());

                }
                stream_typeAnnotations.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    fieldIdentifier_return: (function() {
        AntlrThriftParser.fieldIdentifier_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.fieldIdentifier_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:230:1: fieldIdentifier : intConstant ':' -> intConstant ;
    // $ANTLR start "fieldIdentifier"
    fieldIdentifier: function() {
        var retval = new AntlrThriftParser.fieldIdentifier_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal145 = null;
         var intConstant144 = null;

        var char_literal145_tree=null;
        var stream_95=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 95");
        var stream_intConstant=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule intConstant");
        try {
            // ./grammars/AntlrThrift.g:230:16: ( intConstant ':' -> intConstant )
            // ./grammars/AntlrThrift.g:231:3: intConstant ':'
            this.pushFollow(AntlrThriftParser.FOLLOW_intConstant_in_fieldIdentifier1699);
            intConstant144=this.intConstant();

            this.state._fsp--;

            stream_intConstant.add(intConstant144.getTree());
            char_literal145=this.match(this.input,95,AntlrThriftParser.FOLLOW_95_in_fieldIdentifier1701);  
            stream_95.add(char_literal145);



            // AST REWRITE
            // elements: intConstant
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 231:19: -> intConstant
            {
                this.adaptor.addChild(root_0, stream_intConstant.nextTree());

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    fieldRequiredness_return: (function() {
        AntlrThriftParser.fieldRequiredness_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.fieldRequiredness_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:233:1: fieldRequiredness : ( 'required' -> REQUIRED | 'optional' -> OPTIONAL );
    // $ANTLR start "fieldRequiredness"
    fieldRequiredness: function() {
        var retval = new AntlrThriftParser.fieldRequiredness_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal146 = null;
        var string_literal147 = null;

        var string_literal146_tree=null;
        var string_literal147_tree=null;
        var stream_109=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 109");
        var stream_110=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 110");

        try {
            // ./grammars/AntlrThrift.g:233:18: ( 'required' -> REQUIRED | 'optional' -> OPTIONAL )
            var alt49=2;
            var LA49_0 = this.input.LA(1);

            if ( (LA49_0==109) ) {
                alt49=1;
            }
            else if ( (LA49_0==110) ) {
                alt49=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 49, 0, this.input);

                throw nvae;
            }
            switch (alt49) {
                case 1 :
                    // ./grammars/AntlrThrift.g:234:3: 'required'
                    string_literal146=this.match(this.input,109,AntlrThriftParser.FOLLOW_109_in_fieldRequiredness1714);  
                    stream_109.add(string_literal146);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 234:14: -> REQUIRED
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(REQUIRED, "REQUIRED"));

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:235:3: 'optional'
                    string_literal147=this.match(this.input,110,AntlrThriftParser.FOLLOW_110_in_fieldRequiredness1724);  
                    stream_110.add(string_literal147);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 235:14: -> OPTIONAL
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(OPTIONAL, "OPTIONAL"));

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    fieldValue_return: (function() {
        AntlrThriftParser.fieldValue_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.fieldValue_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:237:1: fieldValue : '=' constValue -> DEFAULT constValue ;
    // $ANTLR start "fieldValue"
    fieldValue: function() {
        var retval = new AntlrThriftParser.fieldValue_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal148 = null;
         var constValue149 = null;

        var char_literal148_tree=null;
        var stream_90=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 90");
        var stream_constValue=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule constValue");
        try {
            // ./grammars/AntlrThrift.g:237:11: ( '=' constValue -> DEFAULT constValue )
            // ./grammars/AntlrThrift.g:238:3: '=' constValue
            char_literal148=this.match(this.input,90,AntlrThriftParser.FOLLOW_90_in_fieldValue1737);  
            stream_90.add(char_literal148);

            this.pushFollow(AntlrThriftParser.FOLLOW_constValue_in_fieldValue1739);
            constValue149=this.constValue();

            this.state._fsp--;

            stream_constValue.add(constValue149.getTree());


            // AST REWRITE
            // elements: constValue
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 238:18: -> DEFAULT constValue
            {
                this.adaptor.addChild(root_0, this.adaptor.create(DEFAULT, "DEFAULT"));
                this.adaptor.addChild(root_0, stream_constValue.nextTree());

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    functionType_return: (function() {
        AntlrThriftParser.functionType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.functionType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:240:1: functionType : ( 'void' -> VOID | fieldType );
    // $ANTLR start "functionType"
    functionType: function() {
        var retval = new AntlrThriftParser.functionType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal150 = null;
         var fieldType151 = null;

        var string_literal150_tree=null;
        var stream_111=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 111");

        try {
            // ./grammars/AntlrThrift.g:240:13: ( 'void' -> VOID | fieldType )
            var alt50=2;
            var LA50_0 = this.input.LA(1);

            if ( (LA50_0==111) ) {
                alt50=1;
            }
            else if ( (LA50_0==IDENTIFIER||(LA50_0>=112 && LA50_0<=121)||(LA50_0>=124 && LA50_0<=125)) ) {
                alt50=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 50, 0, this.input);

                throw nvae;
            }
            switch (alt50) {
                case 1 :
                    // ./grammars/AntlrThrift.g:241:3: 'void'
                    string_literal150=this.match(this.input,111,AntlrThriftParser.FOLLOW_111_in_functionType1754);  
                    stream_111.add(string_literal150);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 241:10: -> VOID
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(VOID, "VOID"));

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:242:3: fieldType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_functionType1764);
                    fieldType151=this.fieldType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, fieldType151.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    fieldType_return: (function() {
        AntlrThriftParser.fieldType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.fieldType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:244:1: fieldType : ( IDENTIFIER | baseType | containerType );
    // $ANTLR start "fieldType"
    fieldType: function() {
        var retval = new AntlrThriftParser.fieldType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var IDENTIFIER152 = null;
         var baseType153 = null;
         var containerType154 = null;

        var IDENTIFIER152_tree=null;

        try {
            // ./grammars/AntlrThrift.g:244:10: ( IDENTIFIER | baseType | containerType )
            var alt51=3;
            switch ( this.input.LA(1) ) {
            case IDENTIFIER:
                alt51=1;
                break;
            case 112:
            case 113:
            case 114:
            case 115:
            case 116:
            case 117:
            case 118:
            case 119:
            case 120:
                alt51=2;
                break;
            case 121:
            case 124:
            case 125:
                alt51=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 51, 0, this.input);

                throw nvae;
            }

            switch (alt51) {
                case 1 :
                    // ./grammars/AntlrThrift.g:245:3: IDENTIFIER
                    root_0 = this.adaptor.nil();

                    IDENTIFIER152=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_fieldType1773); 
                    IDENTIFIER152_tree = this.adaptor.create(IDENTIFIER152);
                    this.adaptor.addChild(root_0, IDENTIFIER152_tree);



                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:246:3: baseType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_baseType_in_fieldType1779);
                    baseType153=this.baseType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, baseType153.getTree());


                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:247:3: containerType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_containerType_in_fieldType1785);
                    containerType154=this.containerType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, containerType154.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    baseType_return: (function() {
        AntlrThriftParser.baseType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.baseType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:249:1: baseType : simpleBaseType ( typeAnnotations )? ;
    // $ANTLR start "baseType"
    baseType: function() {
        var retval = new AntlrThriftParser.baseType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var simpleBaseType155 = null;
         var typeAnnotations156 = null;


        try {
            // ./grammars/AntlrThrift.g:249:9: ( simpleBaseType ( typeAnnotations )? )
            // ./grammars/AntlrThrift.g:250:3: simpleBaseType ( typeAnnotations )?
            root_0 = this.adaptor.nil();

            this.pushFollow(AntlrThriftParser.FOLLOW_simpleBaseType_in_baseType1794);
            simpleBaseType155=this.simpleBaseType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, simpleBaseType155.getTree());
            // ./grammars/AntlrThrift.g:250:18: ( typeAnnotations )?
            var alt52=2;
            var LA52_0 = this.input.LA(1);

            if ( (LA52_0==105) ) {
                alt52=1;
            }
            switch (alt52) {
                case 1 :
                    // ./grammars/AntlrThrift.g:250:18: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_baseType1796);
                    typeAnnotations156=this.typeAnnotations();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, typeAnnotations156.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    simpleBaseType_return: (function() {
        AntlrThriftParser.simpleBaseType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.simpleBaseType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:252:1: simpleBaseType : ( 'string' -> STRING | 'binary' -> BINARY | 'slist' -> SLIST | 'bool' -> BOOL | 'byte' -> BYTE | 'i16' -> I16 | 'i32' -> I32 | 'i64' -> I64 | 'double' -> DOUBLE );
    // $ANTLR start "simpleBaseType"
    simpleBaseType: function() {
        var retval = new AntlrThriftParser.simpleBaseType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal157 = null;
        var string_literal158 = null;
        var string_literal159 = null;
        var string_literal160 = null;
        var string_literal161 = null;
        var string_literal162 = null;
        var string_literal163 = null;
        var string_literal164 = null;
        var string_literal165 = null;

        var string_literal157_tree=null;
        var string_literal158_tree=null;
        var string_literal159_tree=null;
        var string_literal160_tree=null;
        var string_literal161_tree=null;
        var string_literal162_tree=null;
        var string_literal163_tree=null;
        var string_literal164_tree=null;
        var string_literal165_tree=null;
        var stream_116=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 116");
        var stream_117=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 117");
        var stream_114=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 114");
        var stream_115=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 115");
        var stream_112=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 112");
        var stream_113=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 113");
        var stream_120=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 120");
        var stream_118=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 118");
        var stream_119=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 119");

        try {
            // ./grammars/AntlrThrift.g:252:15: ( 'string' -> STRING | 'binary' -> BINARY | 'slist' -> SLIST | 'bool' -> BOOL | 'byte' -> BYTE | 'i16' -> I16 | 'i32' -> I32 | 'i64' -> I64 | 'double' -> DOUBLE )
            var alt53=9;
            switch ( this.input.LA(1) ) {
            case 112:
                alt53=1;
                break;
            case 113:
                alt53=2;
                break;
            case 114:
                alt53=3;
                break;
            case 115:
                alt53=4;
                break;
            case 116:
                alt53=5;
                break;
            case 117:
                alt53=6;
                break;
            case 118:
                alt53=7;
                break;
            case 119:
                alt53=8;
                break;
            case 120:
                alt53=9;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 53, 0, this.input);

                throw nvae;
            }

            switch (alt53) {
                case 1 :
                    // ./grammars/AntlrThrift.g:253:3: 'string'
                    string_literal157=this.match(this.input,112,AntlrThriftParser.FOLLOW_112_in_simpleBaseType1806);  
                    stream_112.add(string_literal157);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 253:12: -> STRING
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(STRING, "STRING"));

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:254:3: 'binary'
                    string_literal158=this.match(this.input,113,AntlrThriftParser.FOLLOW_113_in_simpleBaseType1816);  
                    stream_113.add(string_literal158);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 254:12: -> BINARY
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(BINARY, "BINARY"));

                    }

                    retval.tree = root_0;

                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:255:3: 'slist'
                    string_literal159=this.match(this.input,114,AntlrThriftParser.FOLLOW_114_in_simpleBaseType1826);  
                    stream_114.add(string_literal159);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 255:12: -> SLIST
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(SLIST, "SLIST"));

                    }

                    retval.tree = root_0;

                    break;
                case 4 :
                    // ./grammars/AntlrThrift.g:256:3: 'bool'
                    string_literal160=this.match(this.input,115,AntlrThriftParser.FOLLOW_115_in_simpleBaseType1838);  
                    stream_115.add(string_literal160);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 256:12: -> BOOL
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(BOOL, "BOOL"));

                    }

                    retval.tree = root_0;

                    break;
                case 5 :
                    // ./grammars/AntlrThrift.g:257:3: 'byte'
                    string_literal161=this.match(this.input,116,AntlrThriftParser.FOLLOW_116_in_simpleBaseType1852);  
                    stream_116.add(string_literal161);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 257:12: -> BYTE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(BYTE, "BYTE"));

                    }

                    retval.tree = root_0;

                    break;
                case 6 :
                    // ./grammars/AntlrThrift.g:258:3: 'i16'
                    string_literal162=this.match(this.input,117,AntlrThriftParser.FOLLOW_117_in_simpleBaseType1866);  
                    stream_117.add(string_literal162);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 258:12: -> I16
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(I16, "I16"));

                    }

                    retval.tree = root_0;

                    break;
                case 7 :
                    // ./grammars/AntlrThrift.g:259:3: 'i32'
                    string_literal163=this.match(this.input,118,AntlrThriftParser.FOLLOW_118_in_simpleBaseType1882);  
                    stream_118.add(string_literal163);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 259:12: -> I32
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(I32, "I32"));

                    }

                    retval.tree = root_0;

                    break;
                case 8 :
                    // ./grammars/AntlrThrift.g:260:3: 'i64'
                    string_literal164=this.match(this.input,119,AntlrThriftParser.FOLLOW_119_in_simpleBaseType1898);  
                    stream_119.add(string_literal164);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 260:12: -> I64
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(I64, "I64"));

                    }

                    retval.tree = root_0;

                    break;
                case 9 :
                    // ./grammars/AntlrThrift.g:261:3: 'double'
                    string_literal165=this.match(this.input,120,AntlrThriftParser.FOLLOW_120_in_simpleBaseType1914);  
                    stream_120.add(string_literal165);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 261:12: -> DOUBLE
                    {
                        this.adaptor.addChild(root_0, this.adaptor.create(DOUBLE, "DOUBLE"));

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    containerType_return: (function() {
        AntlrThriftParser.containerType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.containerType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:263:1: containerType : simpleContainerType ( typeAnnotations )? ;
    // $ANTLR start "containerType"
    containerType: function() {
        var retval = new AntlrThriftParser.containerType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var simpleContainerType166 = null;
         var typeAnnotations167 = null;


        try {
            // ./grammars/AntlrThrift.g:263:14: ( simpleContainerType ( typeAnnotations )? )
            // ./grammars/AntlrThrift.g:264:3: simpleContainerType ( typeAnnotations )?
            root_0 = this.adaptor.nil();

            this.pushFollow(AntlrThriftParser.FOLLOW_simpleContainerType_in_containerType1927);
            simpleContainerType166=this.simpleContainerType();

            this.state._fsp--;

            this.adaptor.addChild(root_0, simpleContainerType166.getTree());
            // ./grammars/AntlrThrift.g:264:23: ( typeAnnotations )?
            var alt54=2;
            var LA54_0 = this.input.LA(1);

            if ( (LA54_0==105) ) {
                alt54=1;
            }
            switch (alt54) {
                case 1 :
                    // ./grammars/AntlrThrift.g:264:23: typeAnnotations
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotations_in_containerType1929);
                    typeAnnotations167=this.typeAnnotations();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, typeAnnotations167.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    simpleContainerType_return: (function() {
        AntlrThriftParser.simpleContainerType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.simpleContainerType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:266:1: simpleContainerType : ( mapType | setType | listType );
    // $ANTLR start "simpleContainerType"
    simpleContainerType: function() {
        var retval = new AntlrThriftParser.simpleContainerType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var mapType168 = null;
         var setType169 = null;
         var listType170 = null;


        try {
            // ./grammars/AntlrThrift.g:266:20: ( mapType | setType | listType )
            var alt55=3;
            switch ( this.input.LA(1) ) {
            case 121:
                alt55=1;
                break;
            case 124:
                alt55=2;
                break;
            case 125:
                alt55=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 55, 0, this.input);

                throw nvae;
            }

            switch (alt55) {
                case 1 :
                    // ./grammars/AntlrThrift.g:267:3: mapType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_mapType_in_simpleContainerType1939);
                    mapType168=this.mapType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, mapType168.getTree());


                    break;
                case 2 :
                    // ./grammars/AntlrThrift.g:267:13: setType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_setType_in_simpleContainerType1943);
                    setType169=this.setType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, setType169.getTree());


                    break;
                case 3 :
                    // ./grammars/AntlrThrift.g:267:23: listType
                    root_0 = this.adaptor.nil();

                    this.pushFollow(AntlrThriftParser.FOLLOW_listType_in_simpleContainerType1947);
                    listType170=this.listType();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, listType170.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    mapType_return: (function() {
        AntlrThriftParser.mapType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.mapType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:269:1: mapType : 'map' ( cppType )? '<' ft1= fieldType ',' ft2= fieldType '>' -> ^( MAP ( cppType )? $ft1 $ft2) ;
    // $ANTLR start "mapType"
    mapType: function() {
        var retval = new AntlrThriftParser.mapType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal171 = null;
        var char_literal173 = null;
        var char_literal174 = null;
        var char_literal175 = null;
         var ft1 = null;
         var ft2 = null;
         var cppType172 = null;

        var string_literal171_tree=null;
        var char_literal173_tree=null;
        var char_literal174_tree=null;
        var char_literal175_tree=null;
        var stream_121=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 121");
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_85=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 85");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_cppType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule cppType");
        try {
            // ./grammars/AntlrThrift.g:269:8: ( 'map' ( cppType )? '<' ft1= fieldType ',' ft2= fieldType '>' -> ^( MAP ( cppType )? $ft1 $ft2) )
            // ./grammars/AntlrThrift.g:270:3: 'map' ( cppType )? '<' ft1= fieldType ',' ft2= fieldType '>'
            string_literal171=this.match(this.input,121,AntlrThriftParser.FOLLOW_121_in_mapType1956);  
            stream_121.add(string_literal171);

            // ./grammars/AntlrThrift.g:270:9: ( cppType )?
            var alt56=2;
            var LA56_0 = this.input.LA(1);

            if ( (LA56_0==126) ) {
                alt56=1;
            }
            switch (alt56) {
                case 1 :
                    // ./grammars/AntlrThrift.g:270:9: cppType
                    this.pushFollow(AntlrThriftParser.FOLLOW_cppType_in_mapType1958);
                    cppType172=this.cppType();

                    this.state._fsp--;

                    stream_cppType.add(cppType172.getTree());


                    break;

            }

            char_literal173=this.match(this.input,122,AntlrThriftParser.FOLLOW_122_in_mapType1961);  
            stream_122.add(char_literal173);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_mapType1965);
            ft1=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(ft1.getTree());
            char_literal174=this.match(this.input,85,AntlrThriftParser.FOLLOW_85_in_mapType1967);  
            stream_85.add(char_literal174);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_mapType1971);
            ft2=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(ft2.getTree());
            char_literal175=this.match(this.input,123,AntlrThriftParser.FOLLOW_123_in_mapType1973);  
            stream_123.add(char_literal175);



            // AST REWRITE
            // elements: ft2, cppType, ft1
            // token labels: 
            // rule labels: retval, ft1, ft2
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);
            var stream_ft1=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token ft1",ft1!=null?ft1.tree:null);
            var stream_ft2=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token ft2",ft2!=null?ft2.tree:null);

            root_0 = this.adaptor.nil();
            // 270:58: -> ^( MAP ( cppType )? $ft1 $ft2)
            {
                // ./grammars/AntlrThrift.g:270:61: ^( MAP ( cppType )? $ft1 $ft2)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(MAP, "MAP"), root_1);

                // ./grammars/AntlrThrift.g:270:67: ( cppType )?
                if ( stream_cppType.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_cppType.nextTree());

                }
                stream_cppType.reset();
                this.adaptor.addChild(root_1, stream_ft1.nextTree());
                this.adaptor.addChild(root_1, stream_ft2.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    setType_return: (function() {
        AntlrThriftParser.setType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.setType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:272:1: setType : 'set' ( cppType )? '<' ft= fieldType '>' -> ^( SET ( cppType )? $ft) ;
    // $ANTLR start "setType"
    setType: function() {
        var retval = new AntlrThriftParser.setType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal176 = null;
        var char_literal178 = null;
        var char_literal179 = null;
         var ft = null;
         var cppType177 = null;

        var string_literal176_tree=null;
        var char_literal178_tree=null;
        var char_literal179_tree=null;
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_124=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 124");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_cppType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule cppType");
        try {
            // ./grammars/AntlrThrift.g:272:8: ( 'set' ( cppType )? '<' ft= fieldType '>' -> ^( SET ( cppType )? $ft) )
            // ./grammars/AntlrThrift.g:273:3: 'set' ( cppType )? '<' ft= fieldType '>'
            string_literal176=this.match(this.input,124,AntlrThriftParser.FOLLOW_124_in_setType1997);  
            stream_124.add(string_literal176);

            // ./grammars/AntlrThrift.g:273:9: ( cppType )?
            var alt57=2;
            var LA57_0 = this.input.LA(1);

            if ( (LA57_0==126) ) {
                alt57=1;
            }
            switch (alt57) {
                case 1 :
                    // ./grammars/AntlrThrift.g:273:9: cppType
                    this.pushFollow(AntlrThriftParser.FOLLOW_cppType_in_setType1999);
                    cppType177=this.cppType();

                    this.state._fsp--;

                    stream_cppType.add(cppType177.getTree());


                    break;

            }

            char_literal178=this.match(this.input,122,AntlrThriftParser.FOLLOW_122_in_setType2002);  
            stream_122.add(char_literal178);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_setType2006);
            ft=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(ft.getTree());
            char_literal179=this.match(this.input,123,AntlrThriftParser.FOLLOW_123_in_setType2008);  
            stream_123.add(char_literal179);



            // AST REWRITE
            // elements: cppType, ft
            // token labels: 
            // rule labels: retval, ft
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);
            var stream_ft=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token ft",ft!=null?ft.tree:null);

            root_0 = this.adaptor.nil();
            // 273:39: -> ^( SET ( cppType )? $ft)
            {
                // ./grammars/AntlrThrift.g:273:42: ^( SET ( cppType )? $ft)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(SET, "SET"), root_1);

                // ./grammars/AntlrThrift.g:273:48: ( cppType )?
                if ( stream_cppType.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_cppType.nextTree());

                }
                stream_cppType.reset();
                this.adaptor.addChild(root_1, stream_ft.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    listType_return: (function() {
        AntlrThriftParser.listType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.listType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:279:1: listType : 'list' '<' ft= fieldType '>' ( cppType )? -> ^( LIST ( cppType )? $ft) ;
    // $ANTLR start "listType"
    listType: function() {
        var retval = new AntlrThriftParser.listType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var string_literal180 = null;
        var char_literal181 = null;
        var char_literal182 = null;
         var ft = null;
         var cppType183 = null;

        var string_literal180_tree=null;
        var char_literal181_tree=null;
        var char_literal182_tree=null;
        var stream_125=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 125");
        var stream_122=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 122");
        var stream_123=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 123");
        var stream_fieldType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule fieldType");
        var stream_cppType=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule cppType");
        try {
            // ./grammars/AntlrThrift.g:279:9: ( 'list' '<' ft= fieldType '>' ( cppType )? -> ^( LIST ( cppType )? $ft) )
            // ./grammars/AntlrThrift.g:280:3: 'list' '<' ft= fieldType '>' ( cppType )?
            string_literal180=this.match(this.input,125,AntlrThriftParser.FOLLOW_125_in_listType2033);  
            stream_125.add(string_literal180);

            char_literal181=this.match(this.input,122,AntlrThriftParser.FOLLOW_122_in_listType2035);  
            stream_122.add(char_literal181);

            this.pushFollow(AntlrThriftParser.FOLLOW_fieldType_in_listType2039);
            ft=this.fieldType();

            this.state._fsp--;

            stream_fieldType.add(ft.getTree());
            char_literal182=this.match(this.input,123,AntlrThriftParser.FOLLOW_123_in_listType2041);  
            stream_123.add(char_literal182);

            // ./grammars/AntlrThrift.g:280:31: ( cppType )?
            var alt58=2;
            var LA58_0 = this.input.LA(1);

            if ( (LA58_0==126) ) {
                alt58=1;
            }
            switch (alt58) {
                case 1 :
                    // ./grammars/AntlrThrift.g:280:31: cppType
                    this.pushFollow(AntlrThriftParser.FOLLOW_cppType_in_listType2043);
                    cppType183=this.cppType();

                    this.state._fsp--;

                    stream_cppType.add(cppType183.getTree());


                    break;

            }



            // AST REWRITE
            // elements: cppType, ft
            // token labels: 
            // rule labels: retval, ft
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);
            var stream_ft=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token ft",ft!=null?ft.tree:null);

            root_0 = this.adaptor.nil();
            // 280:40: -> ^( LIST ( cppType )? $ft)
            {
                // ./grammars/AntlrThrift.g:280:43: ^( LIST ( cppType )? $ft)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(LIST, "LIST"), root_1);

                // ./grammars/AntlrThrift.g:280:50: ( cppType )?
                if ( stream_cppType.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_cppType.nextTree());

                }
                stream_cppType.reset();
                this.adaptor.addChild(root_1, stream_ft.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    cppType_return: (function() {
        AntlrThriftParser.cppType_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.cppType_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:282:1: cppType : 'cpp_type' i= LITERAL -> ^( CPP_TYPE $i) ;
    // $ANTLR start "cppType"
    cppType: function() {
        var retval = new AntlrThriftParser.cppType_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var i = null;
        var string_literal184 = null;

        var i_tree=null;
        var string_literal184_tree=null;
        var stream_126=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 126");
        var stream_LITERAL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LITERAL");

        try {
            // ./grammars/AntlrThrift.g:282:8: ( 'cpp_type' i= LITERAL -> ^( CPP_TYPE $i) )
            // ./grammars/AntlrThrift.g:283:3: 'cpp_type' i= LITERAL
            string_literal184=this.match(this.input,126,AntlrThriftParser.FOLLOW_126_in_cppType2065);  
            stream_126.add(string_literal184);

            i=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_cppType2069);  
            stream_LITERAL.add(i);



            // AST REWRITE
            // elements: i
            // token labels: i
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_i=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token i",i);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 283:24: -> ^( CPP_TYPE $i)
            {
                // ./grammars/AntlrThrift.g:283:27: ^( CPP_TYPE $i)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(CPP_TYPE, "CPP_TYPE"), root_1);

                this.adaptor.addChild(root_1, stream_i.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typeAnnotations_return: (function() {
        AntlrThriftParser.typeAnnotations_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.typeAnnotations_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:285:1: typeAnnotations : '(' ( typeAnnotation )* ')' -> ( typeAnnotation )* ;
    // $ANTLR start "typeAnnotations"
    typeAnnotations: function() {
        var retval = new AntlrThriftParser.typeAnnotations_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var char_literal185 = null;
        var char_literal187 = null;
         var typeAnnotation186 = null;

        var char_literal185_tree=null;
        var char_literal187_tree=null;
        var stream_106=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 106");
        var stream_105=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 105");
        var stream_typeAnnotation=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule typeAnnotation");
        try {
            // ./grammars/AntlrThrift.g:285:16: ( '(' ( typeAnnotation )* ')' -> ( typeAnnotation )* )
            // ./grammars/AntlrThrift.g:286:3: '(' ( typeAnnotation )* ')'
            char_literal185=this.match(this.input,105,AntlrThriftParser.FOLLOW_105_in_typeAnnotations2087);  
            stream_105.add(char_literal185);

            // ./grammars/AntlrThrift.g:286:7: ( typeAnnotation )*
            loop59:
            do {
                var alt59=2;
                var LA59_0 = this.input.LA(1);

                if ( (LA59_0==IDENTIFIER) ) {
                    alt59=1;
                }


                switch (alt59) {
                case 1 :
                    // ./grammars/AntlrThrift.g:286:7: typeAnnotation
                    this.pushFollow(AntlrThriftParser.FOLLOW_typeAnnotation_in_typeAnnotations2089);
                    typeAnnotation186=this.typeAnnotation();

                    this.state._fsp--;

                    stream_typeAnnotation.add(typeAnnotation186.getTree());


                    break;

                default :
                    break loop59;
                }
            } while (true);

            char_literal187=this.match(this.input,106,AntlrThriftParser.FOLLOW_106_in_typeAnnotations2092);  
            stream_106.add(char_literal187);



            // AST REWRITE
            // elements: typeAnnotation
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 286:27: -> ( typeAnnotation )*
            {
                // ./grammars/AntlrThrift.g:286:30: ( typeAnnotation )*
                while ( stream_typeAnnotation.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_typeAnnotation.nextTree());

                }
                stream_typeAnnotation.reset();

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    typeAnnotation_return: (function() {
        AntlrThriftParser.typeAnnotation_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.typeAnnotation_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:288:1: typeAnnotation : i= IDENTIFIER '=' l= LITERAL ( commaOrSemicolon )? -> ^( TYPE_ANNOTATION $i $l) ;
    // $ANTLR start "typeAnnotation"
    typeAnnotation: function() {
        var retval = new AntlrThriftParser.typeAnnotation_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var i = null;
        var l = null;
        var char_literal188 = null;
         var commaOrSemicolon189 = null;

        var i_tree=null;
        var l_tree=null;
        var char_literal188_tree=null;
        var stream_LITERAL=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LITERAL");
        var stream_90=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token 90");
        var stream_IDENTIFIER=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token IDENTIFIER");
        var stream_commaOrSemicolon=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule commaOrSemicolon");
        try {
            // ./grammars/AntlrThrift.g:288:15: (i= IDENTIFIER '=' l= LITERAL ( commaOrSemicolon )? -> ^( TYPE_ANNOTATION $i $l) )
            // ./grammars/AntlrThrift.g:289:3: i= IDENTIFIER '=' l= LITERAL ( commaOrSemicolon )?
            i=this.match(this.input,IDENTIFIER,AntlrThriftParser.FOLLOW_IDENTIFIER_in_typeAnnotation2108);  
            stream_IDENTIFIER.add(i);

            char_literal188=this.match(this.input,90,AntlrThriftParser.FOLLOW_90_in_typeAnnotation2110);  
            stream_90.add(char_literal188);

            l=this.match(this.input,LITERAL,AntlrThriftParser.FOLLOW_LITERAL_in_typeAnnotation2114);  
            stream_LITERAL.add(l);

            // ./grammars/AntlrThrift.g:289:30: ( commaOrSemicolon )?
            var alt60=2;
            var LA60_0 = this.input.LA(1);

            if ( ((LA60_0>=85 && LA60_0<=86)) ) {
                alt60=1;
            }
            switch (alt60) {
                case 1 :
                    // ./grammars/AntlrThrift.g:289:30: commaOrSemicolon
                    this.pushFollow(AntlrThriftParser.FOLLOW_commaOrSemicolon_in_typeAnnotation2116);
                    commaOrSemicolon189=this.commaOrSemicolon();

                    this.state._fsp--;

                    stream_commaOrSemicolon.add(commaOrSemicolon189.getTree());


                    break;

            }



            // AST REWRITE
            // elements: l, i
            // token labels: l, i
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_l=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token l",l);
            var stream_i=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token i",i);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 289:48: -> ^( TYPE_ANNOTATION $i $l)
            {
                // ./grammars/AntlrThrift.g:289:51: ^( TYPE_ANNOTATION $i $l)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TYPE_ANNOTATION, "TYPE_ANNOTATION"), root_1);

                this.adaptor.addChild(root_1, stream_i.nextNode());
                this.adaptor.addChild(root_1, stream_l.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    intConstant_return: (function() {
        AntlrThriftParser.intConstant_return = function(){};
        org.antlr.lang.extend(AntlrThriftParser.intConstant_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./grammars/AntlrThrift.g:291:1: intConstant : ( INTCONSTANT | HEXCONSTANT );
    // $ANTLR start "intConstant"
    intConstant: function() {
        var retval = new AntlrThriftParser.intConstant_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set190 = null;

        var set190_tree=null;

        try {
            // ./grammars/AntlrThrift.g:291:12: ( INTCONSTANT | HEXCONSTANT )
            // ./grammars/AntlrThrift.g:
            root_0 = this.adaptor.nil();

            set190=this.input.LT(1);
            if ( (this.input.LA(1)>=INTCONSTANT && this.input.LA(1)<=HEXCONSTANT) ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(set190));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(AntlrThriftParser, {
    DFA3_eotS:
        "\u0011\uffff",
    DFA3_eofS:
        "\u0011\uffff",
    DFA3_minS:
        "\u0001\u0045\u0002\uffff\u0001\u003c\u000d\uffff",
    DFA3_maxS:
        "\u0001\u0053\u0002\uffff\u0001\u0048\u000d\uffff",
    DFA3_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\uffff\u0001\u0005\u0001"+
    "\u0006\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a\u0001\u000b\u0001"+
    "\u000c\u0001\u000d\u0001\u000e\u0001\u000f\u0001\u0003\u0001\u0004",
    DFA3_specialS:
        "\u0011\uffff}>",
    DFA3_transitionS: [
            "\u0001\u0001\u0001\u0002\u0001\u0003\u0001\uffff\u0001\u0004"+
            "\u0001\u0005\u0001\u0006\u0001\u0007\u0001\u0008\u0001\u0009"+
            "\u0001\u000a\u0001\u000b\u0001\u000c\u0001\u000d\u0001\u000e",
            "",
            "",
            "\u0001\u000f\u000b\uffff\u0001\u0010",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(AntlrThriftParser, {
    DFA3_eot:
        org.antlr.runtime.DFA.unpackEncodedString(AntlrThriftParser.DFA3_eotS),
    DFA3_eof:
        org.antlr.runtime.DFA.unpackEncodedString(AntlrThriftParser.DFA3_eofS),
    DFA3_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(AntlrThriftParser.DFA3_minS),
    DFA3_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(AntlrThriftParser.DFA3_maxS),
    DFA3_accept:
        org.antlr.runtime.DFA.unpackEncodedString(AntlrThriftParser.DFA3_acceptS),
    DFA3_special:
        org.antlr.runtime.DFA.unpackEncodedString(AntlrThriftParser.DFA3_specialS),
    DFA3_transition: (function() {
        var a = [],
            i,
            numStates = AntlrThriftParser.DFA3_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(AntlrThriftParser.DFA3_transitionS[i]));
        }
        return a;
    })()
});

AntlrThriftParser.DFA3 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 3;
    this.eot = AntlrThriftParser.DFA3_eot;
    this.eof = AntlrThriftParser.DFA3_eof;
    this.min = AntlrThriftParser.DFA3_min;
    this.max = AntlrThriftParser.DFA3_max;
    this.accept = AntlrThriftParser.DFA3_accept;
    this.special = AntlrThriftParser.DFA3_special;
    this.transition = AntlrThriftParser.DFA3_transition;
};

org.antlr.lang.extend(AntlrThriftParser.DFA3, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "100:1: header : ( 'include' LITERAL -> ^( INCLUDE LITERAL ) | 'cpp_include' LITERAL -> ^( CPP_INCLUDE LITERAL ) | 'namespace' t= IDENTIFIER n= IDENTIFIER -> ^( NAMESPACE $t $n) | 'namespace' '*' IDENTIFIER -> ^( NAMESPACE STAR IDENTIFIER ) | 'cpp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cpp'] IDENTIFIER ) | 'php_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['php'] IDENTIFIER ) | 'py_module' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['py'] IDENTIFIER ) | 'perl_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['perl'] IDENTIFIER ) | 'ruby_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['rb'] IDENTIFIER ) | 'smalltalk_category' ST_IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.category'] ST_IDENTIFIER ) | 'smalltalk_prefix' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['smalltalk.prefix'] IDENTIFIER ) | 'java_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['java'] IDENTIFIER ) | 'cocoa_package' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['cocoa'] IDENTIFIER ) | 'xsd_namespace' LITERAL -> ^( NAMESPACE IDENTIFIER['xsd'] LITERAL ) | 'csharp_namespace' IDENTIFIER -> ^( NAMESPACE IDENTIFIER['csharp'] IDENTIFIER ) );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(AntlrThriftParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "COCOA", "CONST", "CONST_LIST", "CONST_MAP", "CPP", "CPP_INCLUDE", "CPP_TYPE", "CSHARP", "DEFAULT", "ENUM", "ENUM_DEF", "EXCEPTION", "EXTENDS", "FIELD", "FUNCTION", "INCLUDE", "JAVA", "LIST", "MAP", "NAMESPACE", "ONEWAY", "PAIR", "PERL", "PHP", "PROGRAM", "PY", "REQUIRED", "SENUM", "STRING", "BINARY", "SLIST", "BOOL", "BYTE", "I16", "I32", "I64", "DOUBLE", "VOID", "OPTIONAL", "RB", "SERVICE", "SET", "SMALLTALK_CATEGORY", "SMALLTALK_PREFIX", "STAR", "STRUCT", "THROWS", "TYPEDEF", "TYPE_ANNOTATION", "UNION", "XSD", "XSD_ALL", "XSD_ATTRIBUTES", "XSD_NILLABLE", "XSD_OPTIONAL", "LITERAL", "IDENTIFIER", "ST_IDENTIFIER", "DUBCONSTANT", "INTCONSTANT", "HEXCONSTANT", "WHITESPACE", "MULTICOMM", "COMMENT", "UNIXCOMMENT", "'include'", "'cpp_include'", "'namespace'", "'*'", "'cpp_namespace'", "'php_namespace'", "'py_module'", "'perl_package'", "'ruby_namespace'", "'smalltalk_category'", "'smalltalk_prefix'", "'java_package'", "'cocoa_package'", "'xsd_namespace'", "'csharp_namespace'", "'typedef'", "','", "';'", "'enum'", "'{'", "'}'", "'='", "'senum'", "'const'", "'['", "']'", "':'", "'struct'", "'union'", "'xsd_all'", "'xsd_optional'", "'xsd_nillable'", "'xsd_attributes'", "'exception'", "'service'", "'extends'", "'('", "')'", "'oneway'", "'throws'", "'required'", "'optional'", "'void'", "'string'", "'binary'", "'slist'", "'bool'", "'byte'", "'i16'", "'i32'", "'i64'", "'double'", "'map'", "'<'", "'>'", "'set'", "'list'", "'cpp_type'"],
    FOLLOW_header_in_program346: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x189FFEE0, 0x000000C3]),
    FOLLOW_definition_in_program349: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x18900000, 0x000000C3]),
    FOLLOW_69_in_header371: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_LITERAL_in_header388: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_70_in_header408: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_LITERAL_in_header421: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_71_in_header442: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header446: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header450: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_71_in_header469: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000100, 0x00000000]),
    FOLLOW_72_in_header471: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header482: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_73_in_header501: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header512: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_74_in_header532: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header543: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_75_in_header563: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header578: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_76_in_header598: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header610: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_77_in_header630: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header640: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_78_in_header660: new org.antlr.runtime.BitSet([0x00000000, 0x20000000]),
    FOLLOW_ST_IDENTIFIER_in_header666: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_79_in_header683: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header691: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_80_in_header711: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header723: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_81_in_header743: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header754: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_82_in_header774: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_LITERAL_in_header785: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_83_in_header808: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_header816: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_const_in_definition839: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typeDefinition_in_definition845: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_service_in_definition851: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_typedef_in_typeDefinition860: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_enum_in_typeDefinition866: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_senum_in_typeDefinition872: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_struct_in_typeDefinition878: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_union_in_typeDefinition884: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_xception_in_typeDefinition890: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_84_in_typedef899: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_typedef901: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_typedef903: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_typedef905: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_commaOrSemicolon928: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_87_in_enum943: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_enum945: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_enum947: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x02000000, 0x00000000]),
    FOLLOW_enumDef_in_enum949: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x02000000, 0x00000000]),
    FOLLOW_89_in_enum952: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_enum954: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_enumDef978: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_90_in_enumDef980: new org.antlr.runtime.BitSet([0x00000000, 0x80000000,0x00000001, 0x00000000]),
    FOLLOW_intConstant_in_enumDef982: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000200]),
    FOLLOW_typeAnnotations_in_enumDef984: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_enumDef987: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_enumDef1007: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000200]),
    FOLLOW_typeAnnotations_in_enumDef1009: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_enumDef1012: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_91_in_senum1049: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_senum1051: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_senum1053: new org.antlr.runtime.BitSet([0x00000000, 0x08000000,0x02000000, 0x00000000]),
    FOLLOW_senumDef_in_senum1055: new org.antlr.runtime.BitSet([0x00000000, 0x08000000,0x02000000, 0x00000000]),
    FOLLOW_89_in_senum1058: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_senum1060: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LITERAL_in_senumDef1073: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_senumDef1075: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_92_in_const1085: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_const1089: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_const1093: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_90_in_const1095: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x21000001, 0x00000000]),
    FOLLOW_constValue_in_const1099: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_const1101: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_intConstant_in_constValue1130: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DUBCONSTANT_in_constValue1136: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LITERAL_in_constValue1142: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_constValue1148: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_constList_in_constValue1154: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_constMap_in_constValue1160: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_93_in_constList1169: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x61000001, 0x00000000]),
    FOLLOW_constValue_in_constList1172: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x61600001, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_constList1174: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x61000001, 0x00000000]),
    FOLLOW_94_in_constList1179: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_88_in_constMap1197: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x23000001, 0x00000000]),
    FOLLOW_constValuePair_in_constMap1200: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x23000001, 0x00000000]),
    FOLLOW_89_in_constMap1204: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_constValue_in_constValuePair1224: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_constValuePair1226: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x21000001, 0x00000000]),
    FOLLOW_constValue_in_constValuePair1230: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_constValuePair1232: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_96_in_struct1254: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_struct1256: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000004]),
    FOLLOW_xsdAll_in_struct1258: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_struct1261: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_field_in_struct1263: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_89_in_struct1266: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_struct1268: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_97_in_union1299: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_union1301: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000004]),
    FOLLOW_xsdAll_in_union1303: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_union1306: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_field_in_union1308: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_89_in_union1311: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_union1313: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_98_in_xsdAll1344: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_99_in_xsdOptional1357: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_100_in_xsdNillable1370: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_101_in_xsdAttributes1383: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_xsdAttributes1385: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_field_in_xsdAttributes1387: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_89_in_xsdAttributes1390: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_102_in_xception1408: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_xception1410: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_xception1412: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_field_in_xception1414: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x02000001, 0x33FF6000]),
    FOLLOW_89_in_xception1417: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_xception1419: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_103_in_service1444: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_service1448: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000100]),
    FOLLOW_extends_in_service1452: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x01000000, 0x00000000]),
    FOLLOW_88_in_service1455: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x02000000, 0x33FF8800]),
    FOLLOW_function_in_service1457: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x02000000, 0x33FF8800]),
    FOLLOW_89_in_service1460: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_service1462: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_104_in_extends1494: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_extends1496: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_oneway_in_function1513: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF8800]),
    FOLLOW_functionType_in_function1516: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_function1520: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_105_in_function1524: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x00000001, 0x33FF6400]),
    FOLLOW_field_in_function1526: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x00000001, 0x33FF6400]),
    FOLLOW_106_in_function1529: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00001200]),
    FOLLOW_throwz_in_function1531: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000200]),
    FOLLOW_typeAnnotations_in_function1534: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_function1537: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_107_in_oneway1573: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_108_in_throwz1586: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_105_in_throwz1588: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x00000001, 0x33FF6400]),
    FOLLOW_field_in_throwz1590: new org.antlr.runtime.BitSet([0x00000000, 0x90000000,0x00000001, 0x33FF6400]),
    FOLLOW_106_in_throwz1593: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_fieldIdentifier_in_field1611: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF6000]),
    FOLLOW_fieldRequiredness_in_field1614: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_field1617: new org.antlr.runtime.BitSet([0x00000000, 0x10000000]),
    FOLLOW_IDENTIFIER_in_field1621: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x04600000, 0x00000238]),
    FOLLOW_fieldValue_in_field1624: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000238]),
    FOLLOW_xsdOptional_in_field1631: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000230]),
    FOLLOW_xsdNillable_in_field1634: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000220]),
    FOLLOW_xsdAttributes_in_field1637: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000200]),
    FOLLOW_typeAnnotations_in_field1640: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_field1647: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_intConstant_in_fieldIdentifier1699: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x80000000, 0x00000000]),
    FOLLOW_95_in_fieldIdentifier1701: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_109_in_fieldRequiredness1714: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_110_in_fieldRequiredness1724: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_90_in_fieldValue1737: new org.antlr.runtime.BitSet([0x00000000, 0xD8000000,0x21000001, 0x00000000]),
    FOLLOW_constValue_in_fieldValue1739: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_111_in_functionType1754: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_fieldType_in_functionType1764: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_fieldType1773: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_baseType_in_fieldType1779: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_containerType_in_fieldType1785: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_simpleBaseType_in_baseType1794: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_baseType1796: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_112_in_simpleBaseType1806: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_113_in_simpleBaseType1816: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_114_in_simpleBaseType1826: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_115_in_simpleBaseType1838: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_116_in_simpleBaseType1852: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_117_in_simpleBaseType1866: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_118_in_simpleBaseType1882: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_119_in_simpleBaseType1898: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_120_in_simpleBaseType1914: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_simpleContainerType_in_containerType1927: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x00000200]),
    FOLLOW_typeAnnotations_in_containerType1929: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_mapType_in_simpleContainerType1939: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_setType_in_simpleContainerType1943: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_listType_in_simpleContainerType1947: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_121_in_mapType1956: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x44000000]),
    FOLLOW_cppType_in_mapType1958: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x04000000]),
    FOLLOW_122_in_mapType1961: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_mapType1965: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00200000, 0x00000000]),
    FOLLOW_85_in_mapType1967: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_mapType1971: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_mapType1973: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_124_in_setType1997: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x44000000]),
    FOLLOW_cppType_in_setType1999: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x04000000]),
    FOLLOW_122_in_setType2002: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_setType2006: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_setType2008: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_125_in_listType2033: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x04000000]),
    FOLLOW_122_in_listType2035: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x33FF0000]),
    FOLLOW_fieldType_in_listType2039: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00000000, 0x08000000]),
    FOLLOW_123_in_listType2041: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00000000, 0x40000000]),
    FOLLOW_cppType_in_listType2043: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_126_in_cppType2065: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_LITERAL_in_cppType2069: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_105_in_typeAnnotations2087: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x00000400]),
    FOLLOW_typeAnnotation_in_typeAnnotations2089: new org.antlr.runtime.BitSet([0x00000000, 0x10000000,0x00000000, 0x00000400]),
    FOLLOW_106_in_typeAnnotations2092: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_typeAnnotation2108: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x04000000, 0x00000000]),
    FOLLOW_90_in_typeAnnotation2110: new org.antlr.runtime.BitSet([0x00000000, 0x08000000]),
    FOLLOW_LITERAL_in_typeAnnotation2114: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00600000, 0x00000000]),
    FOLLOW_commaOrSemicolon_in_typeAnnotation2116: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_intConstant0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();
module.exports = AntlrThriftParser;
