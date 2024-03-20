<?php

use App\Http\Controllers\ForumController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/newsletter', function () {
    return Inertia::render('Newsletter');
})->name('newsletter');

Route::get('/devenir-benevole', function () {
    return Inertia::render('Benevole');
})->name('benevole');

Route::middleware('auth')->group(function () {

    Route::get('/dashboard/users', [ProfileController::class, 'index'])->name('users.index');
    Route::post('/dashboard/users/{user}/role', [ProfileController::class, 'updateRole'])->name('users.updateRole');

    Route::get('/forum', [ForumController::class, 'index'])->name('forum.index');
    Route::get('/forum/{id}', [ForumController::class, 'showPost'])->name('forum.showPost');
    Route::post('/comment/{id}', [ForumController::class, 'comment'])->name('forum.comment');
    Route::post('/forum/create', [ForumController::class, 'create'])->name('forum.createPost');

    Route::get('/posts', [ForumController::class, 'posts'])->name('posts.index');
    Route::delete('/posts/{id}', [ForumController::class, 'destroyPost'])->name('posts.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
