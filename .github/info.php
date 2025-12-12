<?php
$etablissement = "Université Exemple";
$module = "Développement Web";
$annee = 2025;

$a = 7;
$b = 3;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Infos PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Page PHP – Variables & Calculs</h1>
</header>

<main>
    <section class="card">
        <h2>Informations</h2>
        <?php 
            echo "<p>Établissement : $etablissement</p>";
            echo "<p>Module : $module</p>";
            echo "<p>Année : $annee</p>";
        ?>
    </section>

    <section class="card">
        <h2>Variables & Calculs</h2>
        <?php
            echo "<p>A = $a</p>";
            echo "<p>B = $b</p>";
            echo "<p>Addition : $a + $b = $addition</p>";
            echo "<p>Multiplication : $a × $b = $multiplication</p>";
        ?>
    </section>

    <section class="card link-card">
        <a href='index.html'>Retour à la calculatrice</a>
    </section>
</main>

<footer>
    <p>TP6 — Page PHP</p>
</footer>

</body>
</html>