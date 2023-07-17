<?php

  namespace Database\Seeders;

  use App\Models\Recipe;
  use App\Models\User;
  use App\Models\Comment;
  use Faker\Factory;
  use Illuminate\Database\Seeder;
  use Illuminate\Support\Facades\Hash;

  class DatabaseSeeder extends Seeder
  {
    static array $recipes  = [
      "Aile de Chauve-souris croustillante",
      "Biscuit de pain d'épice",
      "Filet de frôle-lune rôti",
      "Goujon brillant",
      "Maquereau ombré",
      "Oeufs aux herbes",
      "Steak de lynx",
      "Viande de Loup grillée",
      "Viande de Sanglier rôtie",
      "Kébab d'araignée Kaldorei",
      "Viande de Loup épicée",
      "Surprise du scorpide",
      "Côtes de Sanglier à la bière",
      "Lait de poule",
      "Viande de Kodo rôtie",
      "Viande d'ours fumée",
      "Bouchées à la chauve-souris",
      "Brouet de trotteur",
      "Délice de Furie de Loch",
      "Filet de Furie",
      "Lutjan à longue mâchoire",
      "Palourdes bouillies",
      "Steak de Coyote",
      "Thon arc-en-ciel",
      "Tourte au foie de Broche-Tripes",
      "Surprise d'araignée croustillante",
      "Boudin",
      "Thé de chardon",
      "Beignet de Crabe",
      "Ragoût de la marche de l'Ouest",
      "Côtes de Porc séchées",
      "Sagerelle fumée",
      "Steak de Crocilisque",
      "Délice de déviant",
      "Pince de Crabe farcie",
      "Brouet de rat",
      "Soupe aux ailerons de Murloc",
      "Soupe de palourdes",
      "Goulash des Carmines",
      "Kébab de loup assaisonné",
      "Poisson-chat moustachu",
      "Queue de lézard croquante",
      "Côtes de Porc aux herbes",
      "Steak de grand ours",
      "Tourte d'Araignée fondante",
      "Venaison dégraissée",
      "Gombo de Crocilisque",
      "Côtelettes de Lion épicées",
      "Palourdes gobelines",
      "Steak de Loup",
      "Omelette au goût étrange",
      "Délicieux steak de Lion",
      "Ragoût épais de crocilisque",
      "Aile de busard grillée",
      "Ardeur de Palourde géante",
      "Bisque de Tortue apaisante",
      "Côtes de Loup épicées",
      "Délice de sagerelle",
      "Morue rochécaille",
      "Ragoût de la jungle",
      "Ragoût mystère",
      "Rôti de Raptor",
      "Tourte surprise",
      "Truite tête-mithril",
      "Thé de dorépine",
      "Chili de souffle de dragon",
      "Ragoût épais de Kodo",
      "Saucisse d'Araignée",
      "Barracuda luisant cuit",
      "Chili de Crabe épicé",
      "Filet de Rouget",
      "Jaune-queue tacheté",
      "Omelette monstrueuse",
      "Soupe de palourdes d'Undermine",
      "Steak de loup tendre",
      "Calmar grillé",
      "Perche fumée",
      "Saumon Solécaille poché",
      "Soupe de Lutjan nagenuit",
      "Courante-surprise",
      "Pain de Saumon",
      "Ragout de homard",
      "Steak de Barracuda",
      "Boulettes fumées du désert",
      "Pyro-côtelettes de chimaerok à la Dirge"
    ];
    static array $reagents = [
      "Aile de chauve-souris charnue x 1<br>Epices douces x 1",
      "Epices spéciales x 1<br>Petit oeuf x 1",
      "Filet de cerf frôle-lune x 1",
      "Goujon brillant cru x 1",
      "Maquereau ombré cru x 1",
      "Epices douces x 1<br>Petit oeuf x 1",
      "Viande de lynx x 1",
      "Viande de loup maigre x 1",
      "Morceau de viande de sanglier x 1",
      "Petite patte d'araignée x 1",
      "Epices douces x 1<br>Viande de loup maigre x 1",
      "Dard de scorpide x 1",
      "Bière au malt Rhapsody x 1<br>Côtes de Sanglier des rochers x 1",
      "Eau de vie spéciale x 1<br>Epices spéciales x 1<br>Lait glacé x 1<br>Petit oeuf x 1",
      "Epices douces x 1<br>Viande de kodo x 1",
      "Viande d'ours x 1",
      "Chair de chauve-souris x 1",
      "Pomme rouge brillante x 1<br>Viande de trotteur x 1",
      "Epices douces x 1<br>Furie du Loch crue x 1",
      "Chair tendre de Furie x 1<br>Epices douces x 1",
      "Lutjan à longue mâchoire cru x 1",
      "Chair de Palourde x 1<br>Eau de source x 1",
      "Viande de Coyote x 1",
      "Thon arc-en-ciel cru x 1",
      "Epices douces x 1<br>Foie de Broche-Tripes x 1",
      "Patte d'araignée croustillante x 1",
      "Ichor d'araignée x 1<br>Tripes de sanglier x 1<br>Viande d'ours x 1",
      "Chardonnier x 1<br>Eau de source x 1",
      "Chair de clampant x 1<br>Epices douces x 1",
      "Groin de Broche-Tripes x 1<br>Oeil de murloc x 1<br>Viande filandreuse de vautour x 1",
      "Côtes de sanglier x 1<br>Epices douces x 1",
      "Epices douces x 1<br>Sagerelle crue x 1",
      "Epices douces x 1<br>Viande de crocilisque x 1",
      "Epices douces x 1<br>Poisson déviant x 1",
      "Epices douces x 1<br>Pince de clampant x 1",
      "Rat fouisseur x 1",
      "Aileron de Murloc x 2<br>Epices fortes x 1",
      "Chair de Palourde x 1<br>Epices douces x 1<br>Lait glacé x 1",
      "Chair croustillante d'araignée x 1<br>Viande de condor coriace x 1",
      "Herbes aromatiques de Stormwind x 1<br>Steak de loup x 2",
      "Poisson-chat moustachu cru x 1",
      "Epices fortes x 1<br>Queue de lézard-tonnerre x 1",
      "Côtes de sanglier x 2<br>Epices fortes x 1",
      "Epices fortes x 1<br>Viande de grand ours x 1",
      "Epices fortes x 1<br>Patte d'araignée fondante x 2",
      "Epices douces x 4<br>Viande de cerf x 1",
      "Epices fortes x 1<br>Viande de crocilisque tendre x 1",
      "Epices fortes x 1<br>Viande de lion x 1",
      "Chair de Palourde relevée x 1<br>Epices fortes x 1",
      "Epices douces x 1<br>Steak de loup x 1",
      "Epices fortes x 1<br>Oeuf de raptor x 1",
      "Epices apaisantes x 1<br>Viande de lion x 2",
      "Epices apaisantes x 1<br>Viande de crocilisque tendre x 2",
      "Aile de Busard x 1<br>Epices fortes x 1",
      "Chair de Palourdes géantes x 1<br>Epices fortes x 1",
      "Epices apaisantes x 1<br>Viande de tortue x 1",
      "Epices fortes x 1<br>Viande de loup rouge x 1",
      "Epices fortes x 1<br>Grande sagerelle crue x 1",
      "Morue rochécaille crue x 1",
      "Eau de source x 1<br>Pomme rouge brillante x 2<br>Viande de Tigre x 1",
      "Outre de bière naine x 1<br>Viande mystère x 1",
      "Chair de raptor x 1<br>Epices fortes x 1",
      "Epices fortes x 1<br>Viande mystère x 1",
      "Truite tête-mithril crue x 1",
      "Dorépine x 1<br>Eau de source x 1",
      "Epices fortes x 1<br>Petit sac de flammes x 1<br>Viande mystère x 1",
      "Eau de source x 1<br>Epices apaisantes x 1<br>Viande de kodo épaisse x 2",
      "Viande d'araignée blanche x 2",
      "Barracuda luisant cru x 1<br>Epices apaisantes x 1",
      "Epices fortes x 2<br>Viande de crabe tendre x 1",
      "Rouget cru x 1",
      "Jaune-queue tacheté cru x 1",
      "Epices apaisantes x 2<br>Oeuf géant x 1",
      "Chair de palourde piquante x 2<br>Epices fortes x 1<br>Lait glacé x 1",
      "Epices apaisantes x 1<br>Viande de loup tendre x 1",
      "Calmar hivernal x 1<br>Epices apaisantes x 1",
      "Epices fortes x 2<br>Perche estivale crue x 1",
      "Saumon Solécaille cru x 1",
      "Eau de source x 1<br>Lutjan nagenuit cru x 1",
      "Epices apaisantes x 1<br>Racine de Courante x 1",
      "Epices apaisantes x 1<br>Saumon Blanchécaille cru x 1",
      "Eau de source x 1<br>Homard Pince-noire x 1",
      "Epices apaisantes x 1<br>Epices fortes x 1<br>Grand Barracuda cru x 1",
      "Chair de ver des sables x 1<br>Epices apaisantes x 1",
      "Carburant de fusée des gobelins x 1<br>Epices fortes x 1<br>Filet de chimaerok x 1<br>Sel de Fonderoc x 1"
    ];
    static array $chefs    = [
      "'Cuistot' McFadesauce",
      "Alegorn",
      "Craig Nollward",
      "Crystal Boughman",
      "Mumman",
      "Cuisinier Ghilm",
      "Daryl Riknussun",
      "Dwane Wertle",
      "Gremlock Pilsnor",
      "Stephen Ryback",
      "Tomas",
      "Zarrin",
      "Aska Cours-la-brume",
      "Duhng",
      "Maître cuisinier Mouldier",
      "Sylann",
      "Eunice Burch",
      "Mudduk",
      "Pyall Sabots-feutrés",
      "Zamja",
      "Jack Trappeur",
      "Shandrina",
      "Wulan",
      "Dirge Hachillico",
      "Gaston",
      "Baxter",
      "Naka"
    ];

    /**
     * Seed the application's database.
     * @return void
     */
    public function run() : void
    {
      $faker = Factory::create();

      //==========================
      // Recipes
      //==========================

      for( $i = 0 ; $i < count( self::$recipes ) ; $i++ ) :
        $recipe = new Recipe( [
          "name"        => self::$recipes[$i],
          "description" => $faker->paragraphs( 3, true ),
          "ingredients" => self::$reagents[$i],
          "user_id"     => $faker->numberBetween( 2, 10 )
        ] );
        $recipe->save();
      endfor ;

      //==========================
      // Users
      //==========================

      ( new User( [
        'username' => 'John Doe',
        'password' => Hash::make( 'JD-Secret' ),
      ] ) )->save();

      for( $i = 0 ; $i < count( self::$chefs ) ; $i++ ) :

        // User
        $user = new User( [
          'username'   => self::$chefs[$i],
          'password'   => Hash::make( $faker->password( 10, 48 ) ),
          "created_at" => $faker->dateTimeInInterval( '-3 week', '-1 week' ),
          "updated_at" => null,
          "deleted_at" => $faker->boolean( 10 ) ? $faker->dateTimeInInterval( '-6 days', '-1 days' ) : null,
        ] );
        $user->save();

        // Matching comment for 50% of them
        if( $faker->boolean() ) :

          $comment = new Comment( [
            "message"   => $faker->paragraphs( 1, true ),
            "user_id"   => $user->id,
            "recipe_id" => $faker->numberBetween( 2, 10 ),
          ] );
          $comment->save();

        endif;

      endfor ;
    }
  }
